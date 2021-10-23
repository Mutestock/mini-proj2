#[macro_export]
macro_rules! create_grade {
    () => {
        grade_routes::create_grade().and_then(grade_handlers::create_grade)
    };
}

#[macro_export]
macro_rules! read_grade_by_person_id {
    () => {
        grade_routes::read_grade_by_person_id().and_then(grade_handlers::read_grade_by_person_id)
    };
}

#[macro_export]
macro_rules! read_grade_by_exam_id {
    () => {
        grade_routes::read_grade_by_exam_id().and_then(grade_handlers::read_grade_by_exam_id)
    };
}

#[macro_export]
macro_rules! delete_grade {
    () => {
        grade_routes::delete_grade().and_then(grade_handlers::delete_grade)
    };
}

#[macro_export]
macro_rules! read_grade_list {
    () => {
        grade_routes::read_grade_list().and_then(grade_handlers::read_grade_list)
    };
}
