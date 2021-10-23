
from entities.entity_abstract import AbstractEntity
from connection.sqlite_connection import make_sqlite_connection
from utils.config import PEOPLE_MIGRATIONS
from utils.query_utils import get_down_sql, get_up_sql

# Student references new people. All timestamps won't be represented.


class Person(AbstractEntity):

    def __init__():
        pass

    def insert_query(self) -> None:
        conn = make_sqlite_connection()
        cursor = conn.cursor()
        query = f"INSERT INTO People default VALUES);"
        cursor.execute(query)
        conn.commit()
        cursor.close()
        conn.close()

    @staticmethod
    def create_table() -> None:
        conn = make_sqlite_connection()
        cursor = conn.cursor()
        try:
            cursor.execute(get_up_sql(PEOPLE_MIGRATIONS))
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
            cursor.execute(get_down_sql(PEOPLE_MIGRATIONS))
            conn.commit()
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()
