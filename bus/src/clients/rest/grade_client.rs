use crate::{
    entities::grade::Grade,
    utils::config::{is_containerized_mode, CONFIG},
};
use reqwest;

lazy_static! {
    static ref PATH_PREFIX: String = {
        match is_containerized_mode() {
            true => format!(
                "http://{}:{}/grade",
                CONFIG.containerized.rest.host, CONFIG.containerized.rest.port
            ),
            false => format!(
                "http://{}:{}/grade",
                CONFIG.default.rest.host, CONFIG.default.rest.port
            ),
        }
    };
}

// ##### CREATE #####

pub async fn create_grade(new_grade: Grade) -> Result<String, reqwest::Error> {
    let client = reqwest::Client::new();
    let res = client
        .post(format!("{}", PATH_PREFIX.to_owned()))
        .body(
            serde_json::to_string(&new_grade)
                .expect("Could not deserialize new grade in create grade"),
        )
        .send()
        .await?
        .text()
        .await?;
    Ok(res)
}

// ##### GET #####

pub async fn read_grade_passed() -> Result<String, reqwest::Error> {
    let body = reqwest::get(format!("{}/passed", PATH_PREFIX.to_owned()))
        .await?
        .text()
        .await?;
    Ok(body)
}


pub async fn read_grade_failed() -> Result<String, reqwest::Error> {
    let body = reqwest::get(format!("{}/failed", PATH_PREFIX.to_owned()))
        .await?
        .text()
        .await?;
    Ok(body)
}

pub async fn read_grade_list() -> Result<String, reqwest::Error> {
    let body = reqwest::get(format!("{}", PATH_PREFIX.to_owned()))
        .await?
        .text()
        .await?;
    Ok(body)
}

pub async fn read_grade_by_person_id(id: i32) -> Result<String, reqwest::Error> {
    let body = reqwest::get(format!("{}/p-id={}", PATH_PREFIX.to_owned(), id))
        .await?
        .text()
        .await?;
    Ok(body)
}

pub async fn read_grade_by_exam_id(id: i32) -> Result<String, reqwest::Error> {
    let body = reqwest::get(format!("{}/e-id={}", PATH_PREFIX.to_owned(), id))
        .await?
        .text()
        .await?;
    Ok(body)
}

// ##### DELETE #####

pub async fn delete_grade(id: i32) -> Result<String, reqwest::Error> {
    let client = reqwest::Client::new();
    let body = client
        .delete(format!("{}/{}", PATH_PREFIX.to_owned(), id))
        .send()
        .await?
        .text()
        .await?;
    Ok(body)
}
