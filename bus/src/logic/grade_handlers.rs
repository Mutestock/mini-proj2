use crate::clients::rest::grade_client;
use crate::entities::grade::Grade;

pub async fn create_grade(grade: Grade) -> Result<impl warp::Reply, warp::Rejection> {
    Ok(warp::reply::json(
        &grade_client::create_grade(grade)
            .await
            .expect("Could not create grade"),
    ))
}

pub async fn read_grade_by_person_id(id: i32) -> Result<impl warp::Reply, warp::Rejection> {
    let serialized: Grade = serde_json::from_str(
        &grade_client::read_grade_by_person_id(id)
            .await
            .expect("Could not read grade"),
    )
    .expect("Could not serialize grade list");
    Ok(warp::reply::json(
        &serialized
    ))
}

pub async fn read_grade_by_exam_id(id: i32) -> Result<impl warp::Reply, warp::Rejection> {
    let serialized: Grade = serde_json::from_str(
        &grade_client::read_grade_by_exam_id(id)
            .await
            .expect("Could not read grade"),
    )
    .expect("Could not serialize grade list");
    Ok(warp::reply::json(&serialized))
}

pub async fn delete_grade(id: i32) -> Result<impl warp::Reply, warp::Rejection> {
    Ok(warp::reply::json(
        &grade_client::delete_grade(id)
            .await
            .expect("Could not delete grade"),
    ))
}

pub async fn read_grade_list() -> Result<impl warp::Reply, warp::Rejection> {
    let serialized: Vec<Grade> = serde_json::from_str(
        &grade_client::read_grade_list()
            .await
            .expect("Could not read grade list"),
    )
    .expect("Could not serialize grade list");
    Ok(warp::reply::json(&serialized))
}
