from entities.exam import Exam
from entities.grade import Grade


def populate() -> None:
    for exam in [
        Exam("Biology",'2006-01-05'),
        Exam("French",'2006-01-05'),
        Exam("Baking",'2006-01-05'),
        Exam("Janitoring",'2006-01-05'),
        Exam("Hammerthrowing",'2006-01-05'),
        Exam("Flamethrowing",'2006-01-05'),
        Exam("Scimitar throwing on camels",'2006-01-05'),
        Exam("Trebuchet Building",'2006-01-05'),
        Exam("Crab Robbing",'2006-01-05'),
        Exam("Pufferfish Feeding",'2006-01-05')
    ]:
        exam.insert_query()
    
    for grade in [
        Grade(1,2, "F"),
        Grade(4,6, "A"),
        Grade(2,4, "C"),
        Grade(3,9, "D"),
        Grade(2,4, "A+"),
        Grade(1,7, "B-"),
        Grade(7,5, "B"),
        Grade(2,7, "B"),
        Grade(3,9, "C"),
        Grade(7,5, "A-"),
        Grade(6,9, "C"),
    ]:
        grade.insert_query()
    

