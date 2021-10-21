use crate::clients::grpc::person_client;
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

pub async fn read_people_list_by_passed() -> Result<impl warp::Reply, warp::Rejection> {
    let grade_json = &grade_client::read_grade_passed()
        .await
        .expect("Could not retrieve data from read exam by id path");

    let grades: Vec<Grade> =
        serde_json::from_str(grade_json).expect("Could not serialize json string to grade list");

    let person_id_list: Vec<i32> = grades.iter().map(|grade| grade.person_id).collect();

    let person_list = person_client::read_person_list_by_id_lists(person_id_list)
        .await
        .expect("Could not parse gRPC read person list passed call");

    let person_list = Person::from_list_response(person_list.person_list);

    let exams_json = exam_client::read_exam_list()
        .await
        .expect("Could not fetch exam list from rest service");

    println!("{}", exams_json);

    let exams: Vec<Exam> =
        serde_json::from_str(&exams_json).expect("Could not serialize json string to exam list");

    let people_with_stats: Vec<PersonStats> = person_list
        .iter()
        .map(|person| PersonStats {
            person: person.clone().to_owned(),
            exams: exams
                .iter()
                .map(|exam| ExamStats {
                    name: exam.name.clone(),
                    examination_date: exam.examination_date.clone(),
                    mark: Grade::search_matching_symbol(&grades, &person, &exam)
                })
                .collect(),
        })
        .collect();

    Ok(warp::reply::json(&people_with_stats))
}
