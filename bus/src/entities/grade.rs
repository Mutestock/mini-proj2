use serde_derive::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct Grade{
    pub person_id: i32,
    pub symbol: String,
    pub exam_id: i32,
}

#[derive(Serialize, Deserialize)]
pub struct GradeList{
    pub grades: Vec<Grade>,
}


