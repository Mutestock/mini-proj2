from entities.school_class import SchoolClass
from entities.person import Person
from entities.person_school_class import PersonSchoolClass


def migrate_down() -> None:
    PersonSchoolClass.drop_table()
    Person.drop_table()
    SchoolClass.drop_table()

def migrate_up() -> None:
    SchoolClass.create_table()
    Person.create_table()
    PersonSchoolClass.create_table()
