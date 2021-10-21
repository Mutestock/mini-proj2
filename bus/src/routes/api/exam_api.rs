#[macro_export]
macro_rules! read_exam {
    () => {
        exam_routes::read()
            .and_then(hybrid_handlers::read_exam_by_id)
    };
}
