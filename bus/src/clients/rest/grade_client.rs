use crate::utils::config::{is_containerized_mode, CONFIG};
use reqwest;

lazy_static! {
    static ref PATH_PREFIX: String = {
        match is_containerized_mode() {
            true => format!(
                "{}:{}/grade",
                CONFIG.containerized.rest.host, CONFIG.containerized.rest.port
            ),
            false => format!(
                "{}:{}/grade",
                CONFIG.default.rest.host, CONFIG.default.rest.port
            ),
        }
    };
}

pub async fn read_grade_passed() -> Result<String, reqwest::Error> {
    let body = reqwest::get(format!("http://{}/passed", PATH_PREFIX.to_owned()))
        .await?
        .text()
        .await?;
    Ok(body)
}
