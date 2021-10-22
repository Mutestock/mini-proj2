#[macro_use]
extern crate lazy_static;

use warp::Filter;

mod clients;
mod entities;
mod logic;
mod routes;
mod utils;

use crate::{
    utils::config::{is_containerized_mode, CONFIG},
};

use self::{
    logic::{hybrid_handlers, person_handlers},
    routes::{exam_routes, hybrid_routes, person_routes},
};

lazy_static! {
    static ref HOST: [u8; 4] = {
        match is_containerized_mode() {
            true => CONFIG.containerized.server.host,
            false => CONFIG.default.server.host,
        }
    };
    static ref PORT: u16 = {
        match is_containerized_mode() {
            true => CONFIG.containerized.server.port,
            false => CONFIG.default.server.port,
        }
    };
}

#[tokio::main]
async fn main() {
    let exam_routes = read_exam!();
    let hybrid_routes =
        read_people_list_by_passed!().or(read_people_list_by_passed_and_exam_subject!());

    let person_routes = read_person!()
        .or(create_person!())
        .or(update_person!())
        .or(delete_person!())
        .or(read_person_list!());

    let routes = exam_routes
        .or(hybrid_routes)
        .or(person_routes);

    println!(
        "Server running on {:?}:{}",
        HOST.to_owned(),
        PORT.to_owned()
    );
    warp::serve(routes)
        .run((HOST.to_owned(), PORT.to_owned()))
        .await;
}
