from entities.school_class import SchoolClass
from entities.person import Person
from entities.person_school_class import PersonSchoolClass
import datetime


def populate() -> None:
    now = datetime.datetime.now().__str__()
    for school_class in [
        SchoolClass("English", now, now),
        SchoolClass("System Integration", now, now),
        SchoolClass("Large System Development", now, now),
        SchoolClass("Test", now, now)
    ]: 
        school_class.insert_query()
    
    for person in [
        Person(1),
        Person(5),
        Person(2),
        Person(8)
    ]:
        person.insert_query()

    for person_school_class in [
        PersonSchoolClass(1, 1),
        PersonSchoolClass(4, 1),
        PersonSchoolClass(1, 2),
        PersonSchoolClass(2, 2),
        PersonSchoolClass(1, 5),
        PersonSchoolClass(2, 5),
        PersonSchoolClass(3, 5),
        PersonSchoolClass(4, 5),
        PersonSchoolClass(3, 8),
        PersonSchoolClass(4, 8),
        PersonSchoolClass(1, 8),
    ]:
        person_school_class.insert_query()

