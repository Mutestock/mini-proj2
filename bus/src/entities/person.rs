tonic::include_proto!("person");
use chrono::NaiveDateTime;
use serde_derive::{Deserialize, Serialize};

use super::exam::ExamStats;

#[derive(Serialize, Deserialize, Clone)]
pub struct Person {
    pub id: i32,
    pub first_name: String,
    pub last_name: String,
    pub phone_number: String,
    pub email: String,
    pub role: String,
    pub created_at: String,
    pub updated_at: String,
}

impl Person {
    pub fn from_response(resp: ReadPersonResponse) -> Self {
        Self {
            id: resp.id,
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

#[derive(Serialize, Deserialize)]
pub struct PersonStats{
    pub person: Person,
    pub exams: Vec<ExamStats>
}