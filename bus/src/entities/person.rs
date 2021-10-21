tonic::include_proto!("person");
use chrono::NaiveDateTime;
use serde_derive::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct Person {
    first_name: String,
    last_name: String,
    phone_number: String,
    email: String,
    role: String,
    created_at: String,
    updated_at: String,
}

impl Person {
    pub fn from_response(resp: ReadPersonResponse) -> Self {
        Self {
            first_name: resp.first_name,
            last_name: resp.last_name,
            phone_number: resp.phone_number,
            email: resp.email,
            role: resp.role,
            created_at: resp.created_at,
            updated_at: resp.updated_at,
        }
    }
    pub fn from_list_response(responses: Vec<ReadPersonResponse>) -> Vec<Person> {
        responses
            .into_iter()
            .map(|resp| Person::from_response(resp))
            .collect()
    }
}
