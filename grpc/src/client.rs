// For manual testing in this project

#[macro_use]
extern crate lazy_static;

mod entities;
mod utils;

//use entities::person::person_client::PersonClient;
//use entities::person::{CreatePersonRequest, ReadPersonRequest};
//use tonic::transport::Channel;
//use utils::config::{is_production_mode, CONFIG};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    //let mut client = match is_production_mode() {
    //    true => {
    //        PersonClient::connect(format!("http://[::1]:{}", CONFIG.production.server.port))
    //            .await?
    //    }
    //    false => {
    //        PersonClient::connect(format!("http://[::1]:{}", 10030))
    //            .await?
    //    }
    //};
//
    //let request = tonic::Request::new(CreatePersonRequest {
    //    first_name: "firstnamefromtonic".to_owned(),
    //    last_name: "lastnamefromtonic".to_owned(),
    //    phone_number: "phonenumberfromtonic".to_owned(),
    //    email: "emailfromtonic".to_owned(),
    //});
//
    //let request02 = tonic::Request::new(ReadPersonRequest{
    //    id: 2,
    //});
//
//
    //let response = client
    //    .create_person(request)
    //    .await
    //    .expect("create_person failed in client");
    //println!("RESPONSE={:?}", response);
//
    //let response02 = client.read_person(request02).await.expect("Something was wrong with read person");
    //println!("resp= {:?}",response02);

    Ok(())
}

//async fn create_person(mut client: PersonClient<Channel>) {
//    let request = tonic::Request::new(CreatePersonRequest {
//        first_name: "first_name_from_tonic".to_owned(),
//        last_name: "last_name_from_tonic".to_owned(),
//        phone_number: "phone_number_from_tonic".to_owned(),
//        email: "email_from_tonic".to_owned(),
//    });
//
//    let response = client
//        .create_person(request)
//        .await
//        .expect("create_person failed in client");
//    println!("RESPONSE={:?}", response);
//}
//