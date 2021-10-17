#[macro_export]
macro_rules! read_exam {
    () => {
        exam_routes::read()
            .and_then(grpc_rest_handlers::read_exam_by_id)
    };
}

