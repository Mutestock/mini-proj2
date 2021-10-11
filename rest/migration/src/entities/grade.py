
from entities.entity_abstract import AbstractEntity
from connection.sqlite_connection import make_sqlite_connection
from utils.config import GRADE_MIGRATIONS
from utils.query_utils import get_down_sql, get_up_sql

# Student references new GRADE. All timestamps won't be represented.


class Grade(AbstractEntity):
    person_id: int
    exam_id: int
    symbol: str

    def __init__(self, person_id, exam_id, symbol):
        self.person_id = person_id
        self.exam_id = exam_id
        self.symbol = symbol

    def insert_query(self) -> None:
        conn = make_sqlite_connection()
        cursor = conn.cursor()
        try:
            query = f"INSERT INTO GRADE (person_id, exam_id, symbol) VALUES ('{self.person_id}', '{self.exam_id}', '{self.symbol}');"
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
            cursor.execute(get_up_sql(GRADE_MIGRATIONS))
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
            cursor.execute(get_down_sql(GRADE_MIGRATIONS))
            conn.commit()
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()
