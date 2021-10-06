// For manual testing in this project

#[macro_use]
extern crate lazy_static;

mod entities;
mod utils;

use entities::student::student_client::StudentClient;
use entities::student::{CreateStudentRequest, ReadStudentRequest};
use tonic::transport::Channel;
use utils::config::{is_production_mode, CONFIG};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut client = match is_production_mode() {
        true => {
            StudentClient::connect(format!("http://[::1]:{}", CONFIG.production.server.port))
                .await?
        }
        false => {
            StudentClient::connect(format!("http://[::1]:{}", 10030))
                .await?
        }
    };

    let request = tonic::Request::new(CreateStudentRequest {
        first_name: "firstnamefromtonic".to_owned(),
        last_name: "lastnamefromtonic".to_owned(),
        phone_number: "phonenumberfromtonic".to_owned(),
        email: "emailfromtonic".to_owned(),
    });

    let request02 = tonic::Request::new(ReadStudentRequest{
        id: 2,
    });


    let response = client
        .create_student(request)
        .await
        .expect("create_student failed in client");
    println!("RESPONSE={:?}", response);

    let response02 = client.read_student(request02).await.expect("Something was wrong with read student");
    println!("resp= {:?}",response02);

    Ok(())
}

async fn create_student(mut client: StudentClient<Channel>) {
    let request = tonic::Request::new(CreateStudentRequest {
        first_name: "first_name_from_tonic".to_owned(),
        last_name: "last_name_from_tonic".to_owned(),
        phone_number: "phone_number_from_tonic".to_owned(),
        email: "email_from_tonic".to_owned(),
    });

    let response = client
        .create_student(request)
        .await
        .expect("create_student failed in client");
    println!("RESPONSE={:?}", response);
}
