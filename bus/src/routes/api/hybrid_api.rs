#[macro_export]
macro_rules! read_people_list_by_passed {
    () => {
        hybrid_routes::read_people_list_by_passed()
            .and_then(hybrid_handlers::read_people_list_by_passed)
    };
}

#[macro_export]
macro_rules! read_people_list_by_passed_and_exam_subject {
    () => {
        hybrid_routes::read_people_list_by_passed_and_exam_subject()
            .and_then(hybrid_handlers::read_people_list_by_passed_and_exam_subject)
    };
}
