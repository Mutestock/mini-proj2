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
    pub default: Default,
    pub containerized: Containerized,    
}

#[derive(Deserialize)]
pub struct Containerized{
    pub server: Server,
    pub grpc: Grpc,
    pub rest: Rest,
}

#[derive(Deserialize)]
pub struct Default{
    pub server: Server,
    pub grpc: Grpc,
    pub rest: Rest,
}

#[derive(Deserialize)]
pub struct Server {
    pub host: [u8;4],
    pub port: u16,
}

#[derive(Deserialize)]
pub struct Rest {
    pub host: String,
    pub port: u16,
}

#[derive(Deserialize)]
pub struct Grpc {
    pub host: String,
    pub port: u16,
}


pub fn is_containerized_mode() -> bool {
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
