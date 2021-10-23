use crate::{
    entities::exam::NewExam,
    utils::config::{is_containerized_mode, CONFIG},
};
use reqwest;

lazy_static! {
    static ref PATH_PREFIX: String = {
        match is_containerized_mode() {
            true => format!(
                "http://{}:{}/exam",
                CONFIG.containerized.rest.host, CONFIG.containerized.rest.port
            ),
            false => format!(
                "http://{}:{}/exam",
                CONFIG.default.rest.host, CONFIG.default.rest.port
            ),
        }
    };
}

pub async fn read_exam(id: i32) -> Result<String, reqwest::Error> {
    let body = reqwest::get(format!("{}/{}", PATH_PREFIX.to_owned(), id))
        .await?
        .text()
        .await?;
    Ok(body)
}

pub async fn read_exam_list() -> Result<String, reqwest::Error> {
    let body = reqwest::get(PATH_PREFIX.to_owned()).await?.text().await?;
    Ok(body)
}

pub async fn create_exam(new_exam: NewExam) -> Result<String, reqwest::Error> {
    let client = reqwest::Client::new();
    let res = client
        .post(format!("{}", PATH_PREFIX.to_owned()))
        .body(
            serde_json::to_string(&new_exam)
                .expect("Could not deserialize new exam in create exam"),
        )
        .send()
        .await?
        .text()
        .await?;
    Ok(res)
}

pub async fn update_exam(new_exam: NewExam, id: i32) -> Result<String, reqwest::Error> {
    let client = reqwest::Client::new();
    let res = client
        .put(format!("{}/{}", PATH_PREFIX.to_owned(), id))
        .body(
            serde_json::to_string(&new_exam)
                .expect("Could not deserialize new exam in create exam"),
        )
        .send()
        .await?
        .text()
        .await?;
    Ok(res)
}

pub async fn delete_exam(id: i32) -> Result<String, reqwest::Error> {
    let client = reqwest::Client::new();
    let body = client
        .delete(format!("{}/{}", PATH_PREFIX.to_owned(), id))
        .send()
        .await?
        .text()
        .await?;
    Ok(body)
}
