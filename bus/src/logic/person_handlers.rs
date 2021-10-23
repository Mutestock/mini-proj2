use crate::clients::grpc::person_client;
use crate::entities::person::{NewPerson, Person};

pub async fn create_person(person: NewPerson) -> Result<impl warp::Reply, warp::Rejection> {
    let res = person_client::create_person(person)
        .await
        .expect("Could not create person");

    Ok(warp::reply::json(&res.message))
}

pub async fn read_person(id: i32) -> Result<impl warp::Reply, warp::Rejection> {
    let res = person_client::read_person(id)
        .await
        .expect("Could not read person");

    Ok(warp::reply::json(&Person::from_read_response(res)))
}

pub async fn update_person(
    id: i32,
    person: NewPerson,
) -> Result<impl warp::Reply, warp::Rejection> {
    let res = person_client::update_person(id, person)
        .await
        .expect("Could not update person");

    Ok(warp::reply::json(&res.message))
}

pub async fn delete_person(id: i32) -> Result<impl warp::Reply, warp::Rejection> {
    let res = person_client::delete_person(id)
        .await
        .expect("Could not delete person");

    Ok(warp::reply::json(&res.message))
}

pub async fn read_person_list() -> Result<impl warp::Reply, warp::Rejection> {
    let res = person_client::read_person_list()
        .await
        .expect("Could not read person list");

    Ok(warp::reply::json(&Person::from_read_list_response(
        res.person_list,
    )))
}

pub async fn read_person_list_by_role(role: String) -> Result<impl warp::Reply, warp::Rejection> {
    let res = person_client::read_person_list_by_role(role)
        .await
        .expect("Could not read person list");

    Ok(warp::reply::json(&Person::from_read_list_response(
        res.person_list,
    )))
}
