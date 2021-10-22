#[macro_export]
macro_rules! read_person {
    () => {
        person_routes::read_person().and_then(person_handlers::read_person)
    };
}

#[macro_export]
macro_rules! create_person {
    () => {
        person_routes::create_person().and_then(person_handlers::create_person)
    };
}

#[macro_export]
macro_rules! update_person {
    () => {
        person_routes::update_person().and_then(person_handlers::update_person)
    };
}
#[macro_export]
macro_rules! delete_person {
    () => {
        person_routes::delete_person().and_then(person_handlers::delete_person)
    };
}
#[macro_export]
macro_rules! read_person_list {
    () => {
        person_routes::read_person_list().and_then(person_handlers::read_person_list)
    };
}
