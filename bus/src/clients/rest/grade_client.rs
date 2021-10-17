use crate::{entities::grade::Grade, utils::config::CONFIG};
use reqwest;
use serde_json::{Value};

lazy_static! {
    static ref PATH_PREFIX: String = format!("{}:{}/grade", CONFIG.rest.host, CONFIG.rest.port);
}

pub async fn read_grade_passed() -> Result<String, reqwest::Error>{
    let body = reqwest::get(format!("http://{}/passed",PATH_PREFIX.to_owned()))
        .await?
        .text()
        .await?;
    
    println!("{}", body);
    Ok(body)
}
