
from entities.entity_abstract import AbstractEntity
from connection.sqlite_connection import make_sqlite_connection
from utils.config import PERSON_CLASS_MIGRATION
from utils.query_utils import get_down_sql, get_up_sql

class PersonSchoolClass(AbstractEntity):
    classes_id: int
    people_id: int
    
    def __init__(self, classes_id: int, people_id: int):
        self.classes_id = classes_id
        self.people_id = people_id

    def insert_query(self) -> None:
        conn = make_sqlite_connection()
        cursor = conn.cursor()
        query = f"INSERT INTO PersonSchoolClass (ClassesId, PeopleId) VALUES ('{self.classes_id}', '{self.people_id}');"
        cursor.execute(query)
        conn.commit()
        cursor.close()
        conn.close()

    @staticmethod
    def create_table() -> None:
        conn = make_sqlite_connection()
        cursor = conn.cursor()
        try:
            cursor.execute(get_up_sql(PERSON_CLASS_MIGRATION))
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
            cursor.execute(get_down_sql(PERSON_CLASS_MIGRATION))
            conn.commit()
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()
