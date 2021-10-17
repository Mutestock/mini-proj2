use warp::{Rejection, Reply};
use serde_json;

use crate::clients::rest::exam_client;
use crate::clients::rest::grade_client;
use crate::clients::grpc::person_client;
use crate::entities::grade::GradeList;

pub async fn read_exam_by_id(id: i32) -> Result<impl warp::Reply, warp::Rejection> {
    let res= &exam_client::read_exam_by_id(id)
        .await
        .expect("Could not retrieve data from read exam by id path");

    Ok(warp::reply::json(
        res   
    ))
}

pub async fn read_people_list_by_passed() -> Result<impl warp::Reply, warp::Rejection> {
    let res= &grade_client::read_grade_passed()
        .await
        .expect("Could not retrieve data from read exam by id path");

    let grades: GradeList = serde_json::from_str(res)
        .expect("Could not serialize json string to grade list");
    
    let person_id_list: Vec<i32> = grades
        .grades
        .into_iter()
        .map(|grade| grade.person_id)
        .collect();

    let person_list = person_client::read_person_list_by_id_lists(person_id_list)
        .await
        .expect("Could not parse gRPC read person list passed call");
    
    Ok(warp::reply::json(
        &format!("{:#?}", person_list)
    ))
}