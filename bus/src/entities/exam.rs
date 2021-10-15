use serde_derive::{Serialize, Deserialize};
use chrono::{NaiveDate, NaiveDateTime};

#[derive(Serialize, Deserialize)]
pub struct Exam{
    name: String,
    examination_date: NaiveDate,
    created_at: NaiveDateTime,
    updated_at: NaiveDateTime
}


