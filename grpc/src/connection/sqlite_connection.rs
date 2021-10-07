use sqlx::sqlite::SqlitePool;

use crate::utils::config::CONFIG;

lazy_static! {
    static ref DATABASE_URL: String = format!("sqlite:{}.db", CONFIG.database.db);
}

pub async fn get_db_pool() -> anyhow::Result<SqlitePool> {
    Ok(SqlitePool::connect(&DATABASE_URL).await?)
}
