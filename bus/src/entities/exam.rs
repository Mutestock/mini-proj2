use serde_derive::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, PartialEq, Debug)]
pub struct Exam {
    pub id: i32,
    pub name: String,
    pub examination_date: String,
    pub created_at: String,
    pub updated_at: String,
}

// Stats for single person exam results
#[derive(Serialize, Deserialize, Clone)]
pub struct ExamStats {
    pub name: String,
    pub examination_date: String,
    pub mark: String,
}

#[derive(Serialize, Deserialize)]
pub struct NewExam {
    pub name: String,
    pub examination_date: String,
}
