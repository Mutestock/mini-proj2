use warp::{filters::BoxedFilter, path, Filter};

use crate::entities::grade::Grade;

fn path_prefix() -> BoxedFilter<()> {
    path!("api" / "grade" / ..).boxed()
}

pub fn read_grade_by_person_id() -> BoxedFilter<(i32,)> {
    warp::get()
        .and(path_prefix())
        .and(warp::path("p-id"))
        .and(warp::path::param::<i32>())
        .boxed()
}

pub fn read_grade_by_exam_id() -> BoxedFilter<(i32,)> {
    warp::get()
        .and(path_prefix())
        .and(warp::path("e-id"))
        .and(warp::path::param::<i32>())
        .boxed()
}

pub fn create_grade() -> BoxedFilter<(Grade,)> {
    let json_body = warp::body::content_length_limit(1024 * 16).and(warp::body::json());

    warp::post()
        .and(path_prefix())
        .and(warp::path::end())
        .and(json_body)
        .boxed()
}

pub fn delete_grade() -> BoxedFilter<(i32,)> {
    warp::delete()
        .and(path_prefix())
        .and(warp::path::param::<i32>())
        .boxed()
}

pub fn read_grade_list() -> BoxedFilter<()> {
    warp::get()
        .and(path_prefix())
        .and(warp::path::end())
        .boxed()
}
