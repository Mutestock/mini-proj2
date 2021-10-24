use crate::clients::grpc::person_client::{self};
use crate::clients::rest::{exam_client, grade_client};
use crate::entities::exam::{Exam, ExamStats};
use crate::entities::grade::Grade;
use crate::entities::person::{Person, PersonStats};

const LEGAL_SYMBOLS: [&str; 13] = [
    "A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F",
];

async fn filter_grades_illegal_symbols(grades: Vec<Grade>) -> Vec<Grade> {
    grades
        .into_iter()
        .filter(|grade| LEGAL_SYMBOLS.contains(&grade.symbol.as_str()))
        .collect()
}

async fn filter_exams_by_subject(exams: Vec<Exam>, subject: &str) -> Vec<Exam> {
    exams
        .into_iter()
        .filter(|exam| exam.name == subject)
        .collect()
}

async fn filter_people_stats_illegal_marks(mut ppl_stats: Vec<PersonStats>) -> Vec<PersonStats> {
    let mut ppl_state_intermediate = ppl_stats.clone();
    for person_stats in ppl_stats.iter_mut() {
        let mut person_stats_intermediate = person_stats.clone();
        for exam in person_stats.exams.iter() {
            if !LEGAL_SYMBOLS.contains(&exam.mark.as_str()) || exam.mark.as_str().is_empty() {
                person_stats_intermediate
                    .exams
                    .retain(|e| e.name != exam.name);
            }
        }
        if person_stats.exams.is_empty() {
            ppl_state_intermediate.retain(|p| p.person.id != person_stats.person.id);
        }
        *person_stats = person_stats_intermediate;
    }
    ppl_state_intermediate
}

async fn collect_people_stats(
    person_list: Vec<Person>,
    exams: Vec<Exam>,
    grades: Vec<Grade>,
) -> Vec<PersonStats> {
    person_list
        .iter()
        .map(|person| PersonStats {
            person: person.clone().to_owned(),
            exams: exams
                .iter()
                .map(|exam| ExamStats {
                    name: exam.name.clone(),
                    examination_date: exam.examination_date.clone(),
                    mark: Grade::search_matching_symbol(&grades, &person, &exam),
                })
                .collect(),
        })
        .collect()
}

// Insert logic for passed
async fn read_grades_and_collect(passed: bool) -> Vec<Grade> {
    let grade_json = match &passed {
        true => grade_client::read_grade_passed()
            .await
            .expect("Could not retrieve data from read exam by id path"),

        false => grade_client::read_grade_failed()
            .await
            .expect("Could not retrieve data from read exam by id path"),
    };

    serde_json::from_str(&grade_json).expect("Could not serialize json string to grade list")
}

async fn read_exams_and_collect() -> Vec<Exam> {
    let exams_json = exam_client::read_exam_list()
        .await
        .expect("Could not fetch exam list from rest service");

    serde_json::from_str(&exams_json).expect("Could not serialize json string to exam list")
}

async fn read_people_by_id_list_and_collect(person_id_list: Vec<i32>) -> Vec<Person> {
    let person_list = person_client::read_person_list_by_id_lists(person_id_list)
        .await
        .expect("Could not parse gRPC read person list passed call");

    Person::from_read_list_response(person_list.person_list)
}

fn collect_person_id_list(grades: &Vec<Grade>) -> Vec<i32> {
    grades.iter().map(|grade| grade.person_id).collect()
}

pub async fn read_people_list_by_passed() -> Result<impl warp::Reply, warp::Rejection> {
    let grades = read_grades_and_collect(true).await;
    let exams = read_exams_and_collect().await;
    let person_id_list: Vec<i32> = collect_person_id_list(&grades);
    let person_list = read_people_by_id_list_and_collect(person_id_list).await;

    let mut people_stats = collect_people_stats(person_list, exams, grades).await;
    people_stats = filter_people_stats_illegal_marks(people_stats).await;

    Ok(warp::reply::json(&people_stats))
}

pub async fn read_people_list_by_passed_and_exam_subject(
    subject: String,
) -> Result<impl warp::Reply, warp::Rejection> {
    let mut grades = read_grades_and_collect(true).await;
    grades = filter_grades_illegal_symbols(grades).await;
    let subject = subject.replace("%20", " ");
    let mut exams = read_exams_and_collect().await;
    exams = filter_exams_by_subject(exams, &subject).await;
    let person_id_list: Vec<i32> = collect_person_id_list(&grades);
    let person_list = read_people_by_id_list_and_collect(person_id_list).await;

    let mut people_stats = collect_people_stats(person_list, exams, grades).await;
    people_stats = filter_people_stats_illegal_marks(people_stats).await;

    Ok(warp::reply::json(&people_stats))
}

pub async fn read_people_list_by_failed() -> Result<impl warp::Reply, warp::Rejection> {
    let grades = read_grades_and_collect(false).await;
    let exams = read_exams_and_collect().await;
    let person_id_list: Vec<i32> = collect_person_id_list(&grades);
    let person_list = read_people_by_id_list_and_collect(person_id_list).await;

    let mut people_stats = collect_people_stats(person_list, exams, grades).await;
    people_stats = filter_people_stats_illegal_marks(people_stats).await;

    Ok(warp::reply::json(&people_stats))
}

pub async fn read_people_list_by_failed_and_exam_subject(
    subject: String,
) -> Result<impl warp::Reply, warp::Rejection> {
    let mut grades = read_grades_and_collect(false).await;
    grades = filter_grades_illegal_symbols(grades).await;
    let subject = subject.replace("%20", " ");
    let mut exams = read_exams_and_collect().await;
    exams = filter_exams_by_subject(exams, &subject).await;
    let person_id_list: Vec<i32> = collect_person_id_list(&grades);
    let person_list = read_people_by_id_list_and_collect(person_id_list).await;

    let mut people_stats = collect_people_stats(person_list, exams, grades).await;
    people_stats = filter_people_stats_illegal_marks(people_stats).await;

    Ok(warp::reply::json(&people_stats))
}
