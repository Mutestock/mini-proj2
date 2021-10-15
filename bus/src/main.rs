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
    routes::exam_routes,
};



#[tokio::main]
async fn main() {

    let exam_routes = read_exam!();

    warp::serve(exam_routes)
        .run(([127, 0, 0, 1], 3030))
        .await;
}