use std::fmt::Result;

use serde_derive::{Serialize, Deserialize};

use super::{exam::Exam, person::Person};

#[derive(Serialize, Deserialize)]
pub struct Grade{
    pub person_id: i32,
    pub symbol: String,
    pub exam_id: i32,
}


impl Grade {
    fn match_grade(&self, person: &Person, exam: &Exam) -> Option<&Grade>{
        if self.person_id == person.id && self.exam_id == exam.id {
            Some(self)
        }
        else{
            None
        }
    }
    pub fn search_matching_symbol(grade_vector: &Vec<Grade>, person: &Person, exam: &Exam) -> String {
        for grade in grade_vector {
            match grade.match_grade(person, exam) {
                Some(v) => return v.symbol.clone(),
                None => ()
            };
        };
        String::from("")
    }
}

