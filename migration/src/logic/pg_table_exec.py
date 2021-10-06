from entities.teacher import Teacher
from entities.grade import Grade
from entities.grade_student import GradeStudent
from entities.grade_teacher import GradeTeacher
from entities.student import Student


def migrate_down() -> None:
    GradeStudent.drop_table()
    GradeTeacher.drop_table()
    Grade.drop_table()
    Teacher.drop_table()
    Student.drop_table()

def migrate_up() -> None:
    Student.create_table()
    Teacher.create_table()
    Grade.create_table()
    GradeStudent.create_table()
    GradeTeacher.create_table()
