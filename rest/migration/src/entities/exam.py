
from sqlite3.dbapi2 import Date
from entities.entity_abstract import AbstractEntity
from connection.sqlite_connection import make_sqlite_connection
from utils.config import EXAM_MIGRATIONS
from utils.query_utils import get_down_sql, get_up_sql

# Student references new EXAM. All timestamps won't be represented.
# Date: https://docs.python.org/3/library/sqlite3.html#sqlite3.Row

class Exam(AbstractEntity):
    name: str
    examination_date: Date

    def __init__(self, name, examination_date):
        self.name = name
        self.examination_date = examination_date

    def insert_query(self) -> None:
        conn = make_sqlite_connection()
        cursor = conn.cursor()
        try:
            query = f"INSERT INTO EXAM (name, examination_date) VALUES ('{self.name}','{self.examination_date}');"
            cursor.execute(query)
            conn.commit()
        except Exception as e:
            print(e)
        finally:
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
