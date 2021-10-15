use person::person_server::{Person, PersonServer};
use person::{CreatePersonRequest, CreatePersonResponse};
use tonic::{transport::Server, Request, Response, Status};

#[macro_use]
extern crate lazy_static;

mod connection;
mod entities;
mod logic;
mod utils;

use entities::person;
use logic::person_handler;
use utils::config::CONFIG;

#[derive(Default)]
pub struct PersonCon {}

#[tonic::async_trait]
impl Person for PersonCon {
    async fn create_person(
        &self,
        request: Request<CreatePersonRequest>,
    ) -> Result<Response<CreatePersonResponse>, Status> {
        println!("Got a request from {:?}", request.remote_addr());

        Ok(Response::new(
            person_handler::create(request.into_inner())
                .await
                .expect("Person Creation failed"),
        ))
    }

    async fn read_person(
        &self,
        request: tonic::Request<person::ReadPersonRequest>,
    ) -> Result<tonic::Response<person::ReadPersonResponse>, tonic::Status> {
        println!("Got a request from {:?}", request.remote_addr());

        Ok(Response::new(
            person_handler::read(request.into_inner())
                .await
                .expect("Person Read failed"),
        ))
    }

    async fn update_person(
        &self,
        request: tonic::Request<person::UpdatePersonRequest>,
    ) -> Result<tonic::Response<person::UpdatePersonResponse>, tonic::Status> {
        println!("Got a request from {:?}", request.remote_addr());

        Ok(Response::new(
            person_handler::update(request.into_inner())
                .await
                .expect("Person Update failed"),
        ))
    }

    async fn delete_person(
        &self,
        request: tonic::Request<person::DeletePersonRequest>,
    ) -> Result<tonic::Response<person::DeletePersonResponse>, tonic::Status> {
        println!("Got a request from {:?}", request.remote_addr());

        Ok(Response::new(
            person_handler::delete(request.into_inner())
                .await
                .expect("Person Delete failed"),
        ))
    }

    async fn read_person_list(
        &self,
        request: tonic::Request<person::ReadPersonListRequest>,
    ) -> Result<tonic::Response<person::ReadPersonListResponse>, tonic::Status> {
        println!("Got a request from {:?}", request.remote_addr());

        Ok(Response::new(
            person_handler::read_list(request.into_inner())
                .await
                .expect("Person Read List failed"),
        ))
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let addr = format!("{}:{}", CONFIG.server.host, CONFIG.server.port)
        .parse()
        .unwrap();
    let person_con = PersonCon::default();

    println!("Server running on: {}:{}", CONFIG.server.host, CONFIG.server.port);

    Server::builder()
        .add_service(PersonServer::new(person_con))
        .serve(addr)
        .await?;

    Ok(())
}
