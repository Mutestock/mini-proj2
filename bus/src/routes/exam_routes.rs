use warp::{filters::BoxedFilter, path, Filter};

use crate::entities::exam::Exam;


fn path_prefix() -> BoxedFilter<()> {
    path!("api"/"exam"/..).boxed()
}

pub fn read() -> BoxedFilter<(i32,)> {
    warp::get()
        .and(path_prefix())
        .and(warp::path::param::<i32>())
        .boxed()
}
