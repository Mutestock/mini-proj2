use chrono::{NaiveDate, NaiveDateTime};
use serde_derive::{Deserialize, Serialize};

use super::grade::Grade;

#[derive(Serialize, Deserialize)]
pub struct Exam {
    pub id: i32,
    pub name: String,
    pub examination_date: String,
    pub created_at: String,
    pub updated_at: String,
}

// Stats for single person exam results
#[derive(Serialize, Deserialize)]
pub struct ExamStats {
    pub name: String,
    pub examination_date: String,
    pub mark: String,
}

impl ExamStats {
    pub fn new(name: String, examination_date: String, grade: Grade) -> Self {
        Self {
            name: name,
            examination_date: examination_date,
            mark: grade.symbol,
        }
    }
}
