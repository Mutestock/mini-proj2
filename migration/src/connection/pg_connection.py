import psycopg2

# utils.environment swaps environment variables on import
from utils.config import DATABASE_CONFIG

POSTGRES_USER = DATABASE_CONFIG["pg_user"]
POSTGRES_PASS = DATABASE_CONFIG["pg_pass"]
POSTGRES_DATABASE = DATABASE_CONFIG["pg_db"]
POSTGRES_HOST = DATABASE_CONFIG["pg_host"]
POSTGRES_PORT = DATABASE_CONFIG["pg_port"]

def make_pg_pool():
    return psycopg2.connect(
        database=POSTGRES_DATABASE,
        user=POSTGRES_USER,
        password=POSTGRES_PASS,
        host=POSTGRES_HOST,
        port=POSTGRES_PORT,
    )