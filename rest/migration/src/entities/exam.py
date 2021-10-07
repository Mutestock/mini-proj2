
from entities.entity_abstract import AbstractEntity
from connection.sqlite_connection import make_sqlite_connection
from utils.config import EXAM_MIGRATIONS
from utils.query_utils import get_down_sql, get_up_sql

# Student references new EXAM. All timestamps won't be represented.


class Exam(AbstractEntity):
    name: str

    def __init__(self, name):
        self.name = name

    def insert_query(self) -> None:
        conn = make_sqlite_connection()
        cursor = conn.cursor()
        query = f"INSERT INTO EXAM (name) VALUES ('{self.name}');"
        cursor.execute(query)
        conn.commit()
        cursor.close()
        conn.close()

    @staticmethod
    def create_table() -> None:
        conn = make_sqlite_connection()
        cursor = conn.cursor()
        try:
            cursor.execute(get_up_sql(EXAM_MIGRATIONS))
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
            cursor.execute(get_down_sql(EXAM_MIGRATIONS))
            conn.commit()
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()
