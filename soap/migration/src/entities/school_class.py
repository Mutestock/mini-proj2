
from entities.entity_abstract import AbstractEntity
from connection.sqlite_connection import make_sqlite_connection
from utils.config import CLASSES_MIGRATION
from utils.query_utils import get_down_sql, get_up_sql

class SchoolClass(AbstractEntity):
    subject: str
    created_at: str
    updated_at: str
    

    def __init__(self, subject: str, created_at: str, updated_at: str):
        self.subject = subject
        self.created_at = created_at
        self.updated_at = updated_at

    def insert_query(self) -> None:
        conn = make_sqlite_connection()
        cursor = conn.cursor()
        query = f"INSERT INTO Classes (Subject, CreatedAt, UpdatedAt) VALUES ('{self.subject}', '{self.created_at}','{self.updated_at}');"
        cursor.execute(query)
        conn.commit()
        cursor.close()
        conn.close()

    @staticmethod
    def create_table() -> None:
        conn = make_sqlite_connection()
        cursor = conn.cursor()
        try:
            cursor.execute(get_up_sql(CLASSES_MIGRATION))
            conn.commit()
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def drop_table() -> None:
        conn = make_sqlite_connection()
        cursor = conn.cursor()
        try:
            cursor.execute(get_down_sql(CLASSES_MIGRATION))
            conn.commit()
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()
