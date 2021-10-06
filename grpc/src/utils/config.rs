use serde_derive::Deserialize;
use std::env;
use std::error::Error;
use std::fs;

lazy_static! {
    static ref CONFIG_PATH: &'static str = "config.toml";
    pub static ref CONFIG: Config =
        read_config_file(&CONFIG_PATH).expect("Config file could not be read at lazy static");
}

#[derive(Deserialize)]
pub struct Config {
    pub production: Production,
    pub development: Development,
    pub containerized: Containerized,
}

#[derive(Deserialize)]
pub struct Production {
    pub server: Server,
    pub database: Database,
}

#[derive(Deserialize)]
pub struct Development {
    pub server: Server,
    pub database: Database,
}

#[derive(Deserialize)]
pub struct Containerized {
    pub server: Server,
    pub database: Database,
}

#[derive(Deserialize)]
pub struct Server {
    pub port: u32,
    pub host: String,
}

#[derive(Deserialize)]
pub struct Database {
    pub pg_port: u16,
    pub pg_user: String,
    pub pg_pass: String,
    pub pg_db: String,
    pub pg_host: String,
}

#[allow(dead_code)]
pub fn is_production_mode() -> bool {
    match env::var_os("PRODUCTION") {
        Some(_) => true,
        None => false,
    }
}

// Pretty much alternate development for containerization.
// Rust takes time to compile and run through a container
// Making an environment variable like this makes the process more bareable.
pub fn is_containerized_development_mode() -> bool {
    match env::var_os("CONTAINERIZED") {
        Some(_) => true,
        None => false,
    }
}

fn read_config_file(path: &str) -> Result<Config, Box<dyn Error>> {
    let file_contents: String = fs::read_to_string(path)?;
    let config: Config = toml::from_str(&file_contents)?;
    Ok(config)
}
