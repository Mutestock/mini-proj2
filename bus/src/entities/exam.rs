use chrono::{NaiveDate, NaiveDateTime};
use serde_derive::{Deserialize, Serialize};

use super::grade::Grade;

#[derive(Serialize, Deserialize)]
pub struct Exam {
    pub id: i32,
    pub name: String,
    pub examination_date: NaiveDate,
    pub created_at: NaiveDateTime,
    pub updated_at: NaiveDateTime,
}


// Stats for single person exam results
#[derive(Serialize, Deserialize)]
pub struct ExamStats {
    name: String,
    examination_date: NaiveDate,
    mark: String,
}

impl ExamStats {
    pub fn new(name: String, examination_date: NaiveDate, grade: Grade) -> Self {
        Self {
            name: name,
            examination_date: examination_date,
            mark: grade.symbol,
        }
    }
}
