#[macro_use]
extern crate lazy_static;

use warp::Filter;

mod clients;
mod entities;
mod logic;
mod routes;
mod utils;

use crate::utils::config::{CONFIG,is_containerized_mode};

use self::{
    logic::grpc_rest_handlers,
    routes::{exam_routes, hybrid_routes},
};

lazy_static! {
    static ref HOST: [u8;4] = {
        match is_containerized_mode(){
            true=>CONFIG.containerized.server.host,
            false=>CONFIG.default.server.host,
        }
    };

    static ref PORT: u16 = {
        match is_containerized_mode(){
            true=>CONFIG.containerized.server.port,
            false=>CONFIG.default.server.port,
        }
    };
}

#[tokio::main]
async fn main() {
    let exam_routes = read_exam!();
    let hybrid_routes = read_people_list_by_passed!();
    let routes = exam_routes.or(hybrid_routes);

    println!("Server running on {:?}:{}", HOST.to_owned(), PORT.to_owned());
    warp::serve(routes).run((HOST.to_owned(), PORT.to_owned())).await;
}

