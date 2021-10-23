from entities.exam import Exam
from entities.grade import Grade


def populate() -> None:
    for exam in [
        Exam("Mini Project 2",'2006-01-05'),
        Exam("System Integration: Final Exam",'2006-01-05'),
        Exam("Mini Project 1",'2006-01-05'),
        Exam("Development of Large Systems: Final Exam",'2006-01-05'),
        Exam("Test: Final Exam",'2006-01-05')
    ]:
        exam.insert_query()

    for grade in [
        Grade(1,1, "A"),
        Grade(1,2, "F"),
        Grade(1,5, "C"),


        Grade(2,1, "A+"),
        Grade(2,2, "D"),
        Grade(2,3, "B-"),
        Grade(2,4, "B"),
        Grade(2,5, "B+"),
        
        Grade(3,1, "F"),
        Grade(3,2, "F"),
        Grade(3,4, "D"),
        Grade(3,5, "C"),

        Grade(4,1, "B"),
        Grade(4,2, "A+"),
        Grade(4,3, "C+"),
        Grade(4,4, "B"),
        Grade(4,5, "A"),

        Grade(3,2, "A"),
        Grade(3,3, "B"),
        Grade(3,4, "A+"),
    ]:
        grade.insert_query()
    

