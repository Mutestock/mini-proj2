from entities.exam import Exam


def migrate_down() -> None:
    Exam.drop_table()

def migrate_up() -> None:
    Exam.create_table()
