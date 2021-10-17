#[macro_export]
macro_rules! read_people_list_by_passed {
    () => {
        hybrid_routes::read_people_list_by_passed()
            .and_then(grpc_rest_handlers::read_people_list_by_passed)
    };
}

