use warp::{filters::BoxedFilter, path, Filter};


fn path_prefix() -> BoxedFilter<()> {
    path!("api"/"hybrid"/..).boxed()
}

pub fn read_people_list_by_passed() -> BoxedFilter<()> {
    warp::get()
        .and(path_prefix())
        .and(warp::path("passed"))
        .and(warp::path::end())
        .boxed()
}

pub fn read_people_list_by_passed_and_exam_subject() -> BoxedFilter<(String,)> {
    warp::get()
        .and(path_prefix())
        .and(warp::path("passed"))
        .and(warp::path::param::<String>())
        .boxed()
}
