#[macro_export]
macro_rules! read_exam {
    () => {
        exam_routes::read_exam().and_then(exam_handlers::read_exam)
    };
}

#[macro_export]
macro_rules! create_exam {
    () => {
        exam_routes::create_exam().and_then(exam_handlers::create_exam)
    };
}

#[macro_export]
macro_rules! update_exam {
    () => {
        exam_routes::update_exam().and_then(exam_handlers::update_exam)
    };
}

#[macro_export]
macro_rules! delete_exam {
    () => {
        exam_routes::delete_exam().and_then(exam_handlers::delete_exam)
    };
}

#[macro_export]
macro_rules! read_exam_list {
    () => {
        exam_routes::read_exam_list().and_then(exam_handlers::read_exam_list)
    };
}
