#![allow(dead_code)]
tonic::include_proto!("person");

//use serde_derive::{Deserialize, Serialize};
use chrono::NaiveDateTime;

// Sqlx => Tonic
#[derive(sqlx::FromRow)]
pub struct PersonConverter {
    pub id: i32,
    pub first_name: String,
    pub last_name: String,
    pub phone_number: String,
    pub email: String,
    pub role: String,
    pub created_at: Option<NaiveDateTime>,
    pub updated_at: Option<NaiveDateTime>,
}

impl PersonConverter {
    pub fn to_read_response(&self) -> ReadPersonResponse {
        ReadPersonResponse {
            id: self.id.clone(),
            first_name: self.first_name.clone(),
            last_name: self.last_name.clone(),
            phone_number: self.phone_number.clone(),
            email: self.email.clone(),
            role: self.role.clone(),
            updated_at: self.updated_at.unwrap().to_string(),
            created_at: self.created_at.unwrap().to_string(),
        }
    }
    fn list_collect(stud_vec: Vec<PersonConverter>) -> Vec<ReadPersonResponse> {
        let mut read_list: Vec<ReadPersonResponse> = vec![];
        for person in stud_vec {
            read_list.push(person.to_read_response())
        }
        read_list
    }
    pub fn to_list_response(stud_vec: Vec<PersonConverter>) -> ReadPersonListResponse {
        ReadPersonListResponse {
            person_list: PersonConverter::list_collect(stud_vec),
        }
    }

    pub fn to_list_from_id_response(
        stud_vec: Vec<PersonConverter>,
    ) -> ReadPersonListByIdListResponse {
        ReadPersonListByIdListResponse {
            person_list: PersonConverter::list_collect(stud_vec),
        }
    }

    pub fn to_list_response_by_role(
        stud_vec: Vec<PersonConverter>,
    ) -> ReadPersonListByRoleResponse {
        ReadPersonListByRoleResponse {
            person_list: PersonConverter::list_collect(stud_vec),
        }
    }
}
