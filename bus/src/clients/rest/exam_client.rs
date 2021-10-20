use crate::{entities::exam::Exam, utils::config::{CONFIG, is_containerized_mode}};
use reqwest;
use serde_json::{Value};

lazy_static! {
    static ref PATH_PREFIX: String = {
        match is_containerized_mode(){
            true => format!("{}:{}/exam", CONFIG.containerized.rest.host, CONFIG.containerized.rest.port),
            false => format!("{}:{}/exam", CONFIG.default.rest.host, CONFIG.default.rest.port),
        }
    };
}

pub async fn read_exam_by_id(id: i32) -> Result<String, reqwest::Error>{
    println!("{}", PATH_PREFIX.to_owned());
    let body = reqwest::get(format!("http://{}/{}",PATH_PREFIX.to_owned(), id))
        .await?
        .text()
        .await?;
    
    println!("{}", body);


    Ok(body)
}
