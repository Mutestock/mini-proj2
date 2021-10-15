use warp::{Rejection, Reply};

use crate::clients::rest::exam_client;

pub async fn read_exam_by_id(id: i32) -> Result<impl warp::Reply, warp::Rejection> {

    let res= &exam_client::read_exam_by_id(id)
        .await
        .expect("Could not retrieve data from read exam by id path");

    Ok(warp::reply::json(
        res   
    ))
}

//pub async fn list() -> Result<impl warp::Reply, warp::Rejection>{
//
//}
