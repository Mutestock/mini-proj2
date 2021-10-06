from entities.teacher import Teacher
from entities.grade import Grade
from entities.grade_student import GradeStudent
from entities.grade_teacher import GradeTeacher
from entities.student import Student


def populate() -> None:
    for grade in list([
        Grade("1st"),
        Grade("2nd"),
        Grade("3rd"),
        Grade("4th"),
        Grade("5th")
    ]):
        grade.insert_query()

    for student in [
        Student("John", "Doe", "39-39-21-21", "aspkd@asd.cs"),
        Student("Jane", "Doe", "32-1-3-12", "sdsvd@cake.flerp"),
        Student("Some Name", "Doe", "02-93-98", "murp@flerp.herp"),
        Student("Ham", "Burger", "21-31-23-124", "asdas@acsc.1231as"),
        Student("Michael", "Bay", "83-75-83-4", "Uber@Cake.onion"),
        Student("Herb", "Derp", "02-39-42", "apsdofk@asd.cs"),
        Student("Ice", "Wallow Komme",
                "92-03-49-02", "jason@bourne.asc"),
        Student("To", "Heck", "234-02-93-78-8", "aosdk@aacs.acsc"),
        Student("Newt", "Fisher", "23-94-23-84", "ccasa@acsåpo.asd"),
        Student("Purd", "Norton", "99-12-31-2", "cmcmcam@qwweqwd.xzc")
    ]:
        student.insert_query()

    for teacher in [
        Teacher("Im out", "of ideas for names",
                "39-39-21-21", "aspkd@asd.cs"),
        Teacher("vspod", "acsasc", "32-1-3-12", "dascas@cake.flerp"),
        Teacher("acsopsk", "ascas", "02-93-98", "cvxcv@flerp.herp"),
        Teacher("zxczc", "vcxcvxc", "21-31-23-124",
                "333asds@acsc.1231as"),
        Teacher("NAME", "asda", "83-75-83-4", "xzvcxvds@Cake.onion"),
        Teacher("cxcas", "2131dasd", "sac-75-83-4",
                "flerpherp@Cake.onion")
    ]:
        teacher.insert_query()

    for grade_student in [
        GradeStudent(1, 1),
        GradeStudent(2, 3),
        GradeStudent(4, 3),
        GradeStudent(3, 4),
        GradeStudent(1, 5),
        GradeStudent(2, 6),
        GradeStudent(1, 7),
        GradeStudent(4, 8),
        GradeStudent(5, 9),
        GradeStudent(5, 10),
        GradeStudent(3, 1),
        GradeStudent(2, 2)
    ]:
        grade_student.insert_query()

    for grade_teacher in [
        GradeTeacher(1, 1),
        GradeTeacher(2, 2),
        GradeTeacher(3, 3),
        GradeTeacher(4, 4),
        GradeTeacher(5, 5),
        GradeTeacher(1, 6)
    ]:
        grade_teacher.insert_query()
