use crate::{entities::grade::Grade, utils::config::{CONFIG, is_containerized_mode}};
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

pub async fn read_grade_passed() -> Result<String, reqwest::Error>{
    let body = reqwest::get(format!("http://{}/passed",PATH_PREFIX.to_owned()))
        .await?
        .text()
        .await?;
    
    println!("{}", body);
    Ok(body)
}
