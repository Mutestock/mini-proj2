from entities.exam import Exam
from entities.grade import Grade


def migrate_down() -> None:
    Grade.drop_table()
    Exam.drop_table()

def migrate_up() -> None:
    Exam.create_table()
    Grade.create_table()
