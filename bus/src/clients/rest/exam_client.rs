use crate::{entities::exam::Exam, utils::config::CONFIG};
use reqwest;
use serde_json::{Value};

lazy_static! {
    static ref PATH_PREFIX: String = format!("{}:{}/exam", CONFIG.rest.host, CONFIG.rest.port);
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
