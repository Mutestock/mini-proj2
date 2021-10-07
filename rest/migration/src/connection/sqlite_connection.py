import sqlite3

# utils.environment swaps environment variables on import
from utils.config import DATABASE_CONFIG

USER = DATABASE_CONFIG["user"]
PASS = DATABASE_CONFIG["pass"]
DATABASE = DATABASE_CONFIG["db"]
HOST = DATABASE_CONFIG["host"]
PORT = DATABASE_CONFIG["port"]

def make_sqlite_connection():
    return sqlite3.connect(f"{DATABASE}.db")


