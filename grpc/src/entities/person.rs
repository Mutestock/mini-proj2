#![allow(dead_code)]
tonic::include_proto!("person");

//use serde_derive::{Deserialize, Serialize};
use chrono::NaiveDateTime;

// Sqlx => Tonic
#[derive(sqlx::FromRow)]
pub struct PersonConverter {
    id: i32,
    first_name: String,
    last_name: String,
    phone_number: String,
    email: String,
    role: String,
    created_at: NaiveDateTime,
    updated_at: NaiveDateTime,
}

impl PersonConverter {
    pub fn to_read_response(&self) -> ReadPersonResponse {
        ReadPersonResponse {
            first_name: self.first_name.clone(),
            last_name: self.last_name.clone(),
            phone_number: self.phone_number.clone(),
            email: self.email.clone(),
            role: self.role.clone(),
            updated_at: self.updated_at.to_string(),
            created_at: self.created_at.to_string(),
        }
    }
    pub fn to_list_response(stud_vec: Vec<PersonConverter>) -> ReadPersonListResponse {
        let mut read_list: Vec<ReadPersonResponse> = vec![];
        for person in stud_vec {
            read_list.push(person.to_read_response())
        }
        ReadPersonListResponse {
            person_list: read_list,
        }
    }
}
