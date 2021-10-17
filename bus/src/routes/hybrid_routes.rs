use warp::{filters::BoxedFilter, path, Filter};


fn path_prefix() -> BoxedFilter<()> {
    path!("api"/"hybrid"/..).boxed()
}

pub fn read_people_list_by_passed() -> BoxedFilter<()> {
    warp::get()
        .and(path_prefix())
        .boxed()
}
