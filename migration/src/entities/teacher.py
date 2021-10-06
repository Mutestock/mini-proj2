
from entities.entity_abstract import AbstractEntity
from connection.pg_connection import make_pg_pool
from utils.config import TEACHERS_MIGRATIONS
from utils.query_utils import get_down_sql, get_up_sql


class Teacher(AbstractEntity):
    first_name: str
    last_name: str
    phone_number: str
    email: str

    def __init__(self, first_name, last_name, phone_number, email):
        self.first_name = first_name
        self.last_name = last_name
        self.phone_number = phone_number
        self.email = email

    def insert_query(self) -> None:
        conn = make_pg_pool()
        cursor = conn.cursor()
        query = f"INSERT INTO teachers (first_name, last_name, phone_number, email) VALUES ('{self.first_name}', '{self.last_name}','{self.phone_number}','{self.email}');"
        cursor.execute(query)
        conn.commit()
        cursor.close()
        conn.close()

    @staticmethod
    def create_table() -> None:
        conn = make_pg_pool()
        cursor = conn.cursor()
        try:
            cursor.execute(get_up_sql(TEACHERS_MIGRATIONS))
            conn.commit()
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()

    @staticmethod
    def drop_table() -> None:
        conn = make_pg_pool()
        cursor = conn.cursor()
        try:
            cursor.execute(get_down_sql(TEACHERS_MIGRATIONS))
            conn.commit()
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()
