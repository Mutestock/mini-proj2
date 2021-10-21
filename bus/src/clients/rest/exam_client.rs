use crate::{
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

pub async fn read_exam_by_id(id: i32) -> Result<String, reqwest::Error> {
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
