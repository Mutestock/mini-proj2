#[macro_use]
extern crate lazy_static;

use warp::Filter;

mod clients;
mod entities;
mod logic;
mod routes;
mod utils;

use self::{
    logic::grpc_rest_handlers,
    routes::{exam_routes, hybrid_routes},
};

#[tokio::main]
async fn main() {
    let exam_routes = read_exam!();
    let hybrid_routes = read_people_list_by_passed!();

    let routes = exam_routes.or(hybrid_routes);

    warp::serve(routes).run(([127, 0, 0, 1], 3030)).await;
}
