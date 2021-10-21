use crate::clients::grpc::person_client::{self, read_person_list_by_id_lists};
use crate::clients::rest::{exam_client, grade_client};
use crate::entities::exam::{Exam, ExamStats};
use crate::entities::grade::Grade;
use crate::entities::person::{Person, PersonStats};

pub async fn read_exam_by_id(id: i32) -> Result<impl warp::Reply, warp::Rejection> {
    let res = &exam_client::read_exam_by_id(id)
        .await
        .expect("Could not retrieve data from read exam by id path");

    Ok(warp::reply::json(res))
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
async fn read_grades_and_collect() -> Vec<Grade> {
    let grade_json = &grade_client::read_grade_passed()
        .await
        .expect("Could not retrieve data from read exam by id path");

    serde_json::from_str(grade_json).expect("Could not serialize json string to grade list")
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

    Person::from_list_response(person_list.person_list)
}

fn collect_person_id_list(grades: &Vec<Grade>) -> Vec<i32> {
    grades.iter().map(|grade| grade.person_id).collect()
}

pub async fn read_people_list_by_passed() -> Result<impl warp::Reply, warp::Rejection> {
    let grades = read_grades_and_collect().await;
    let exams = read_exams_and_collect().await;
    let person_id_list: Vec<i32> = collect_person_id_list(&grades);
    let person_list= read_people_by_id_list_and_collect(person_id_list).await;

    Ok(warp::reply::json(
        &collect_people_stats(person_list, exams, grades).await,
    ))
}

pub async fn read_people_list_by_passed_and_exam_subject(subject: String) -> Result<impl warp::Reply, warp::Rejection> {
    let grades = read_grades_and_collect().await;
    let exams = read_exams_and_collect()
        .await
        .into_iter()
        .filter(|exam|exam.name==subject)
        .collect();
    let person_id_list: Vec<i32> = collect_person_id_list(&grades);
    let person_list= read_people_by_id_list_and_collect(person_id_list).await;

    Ok(warp::reply::json(
        &collect_people_stats(person_list, exams, grades).await,
    ))
}
