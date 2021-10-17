tonic::include_proto!("person");
use serde_derive::{Serialize, Deserialize};
use chrono::{NaiveDateTime};


#[derive(Serialize, Deserialize)]
pub struct Person{
    id: i32,
    first_name: String,
    last_name: String, 
    phone_number: String,
    email: String,
    role: String,
    created_at: NaiveDateTime,
    updated_at: NaiveDateTime,
}

