use crate::clients::rest::exam_client;
use crate::entities::exam::{Exam, NewExam};

pub async fn create_exam(exam: NewExam) -> Result<impl warp::Reply, warp::Rejection> {
    Ok(warp::reply::json(
        &exam_client::create_exam(exam)
            .await
            .expect("Could not create exam"),
    ))
}

pub async fn read_exam(id: i32) -> Result<impl warp::Reply, warp::Rejection> {
    Ok(warp::reply::json(
        &exam_client::read_exam(id)
            .await
            .expect("Could not read exam"),
    ))
}

pub async fn update_exam(id: i32, exam: NewExam) -> Result<impl warp::Reply, warp::Rejection> {
    Ok(warp::reply::json(
        &exam_client::update_exam(exam, id)
            .await
            .expect("Could not update exam"),
    ))
}

pub async fn delete_exam(id: i32) -> Result<impl warp::Reply, warp::Rejection> {
    Ok(warp::reply::json(
        &exam_client::delete_exam(id)
            .await
            .expect("Could not delete exam"),
    ))
}

pub async fn read_exam_list() -> Result<impl warp::Reply, warp::Rejection> {
    Ok(warp::reply::json(
        &exam_client::read_exam_list()
            .await
            .expect("Could not read exam list"),
    ))
}
