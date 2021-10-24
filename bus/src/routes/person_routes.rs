use warp::{filters::BoxedFilter, path, Filter};

use crate::entities::person::NewPerson;

fn path_prefix() -> BoxedFilter<()> {
    path!("api" / "person" / ..).boxed()
}

pub fn read_person() -> BoxedFilter<(i32,)> {
    warp::get()
        .and(path_prefix())
        .and(warp::path::param::<i32>())
        .boxed()
}

pub fn create_person() -> BoxedFilter<(NewPerson,)> {
    let json_body = warp::body::content_length_limit(1024 * 16).and(warp::body::json());

    warp::post()
        .and(path_prefix())
        .and(warp::path::end())
        .and(json_body)
        .boxed()
}

pub fn update_person() -> BoxedFilter<(i32, NewPerson)> {
    let json_body = warp::body::content_length_limit(1024 * 16).and(warp::body::json());

    warp::put()
        .and(path_prefix())
        .and(warp::path::param::<i32>())
        .and(json_body)
        .boxed()
}

pub fn delete_person() -> BoxedFilter<(i32,)> {
    warp::delete()
        .and(path_prefix())
        .and(warp::path::param::<i32>())
        .boxed()
}

pub fn read_person_list() -> BoxedFilter<()> {
    warp::get()
        .and(path_prefix())
        .and(warp::path::end())
        .boxed()
}

pub fn read_person_list_by_role() -> BoxedFilter<(String,)> {
    warp::get()
        .and(path_prefix())
        .and(warp::path("role"))
        .and(warp::path::param::<String>())
        .and(warp::path::end())
        .boxed()
}
