from entities.exam import Exam


def populate() -> None:
    for exam in [
        Exam("John", "Doe", "39-39-21-21", "aspkd@asd.cs", "student"),
        Exam("Jane", "Doe", "32-1-3-12", "sdsvd@cake.flerp", "student"),
        Exam("Some Name", "Doe", "02-93-98", "murp@flerp.herp", "student"),
        Exam("Ham", "Burger", "21-31-23-124", "asdas@acsc.1231as", "student"),
        Exam("Michael", "Bay", "83-75-83-4", "Uber@Cake.onion", "student"),
        Exam("Herb", "Derp", "02-39-42", "apsdofk@asd.cs", "student"),
        Exam("Ice", "Wallow Komme",
                "92-03-49-02", "jason@bourne.asc", "student"),
        Exam("To", "Heck", "234-02-93-78-8", "aosdk@aacs.acsc", "student"),
        Exam("Newt", "Fisher", "23-94-23-84", "ccasa@acsåpo.asd", "student"),
        Exam("Purd", "Norton", "99-12-31-2", "cmcmcam@qwweqwd.xzc", "student")
    ]:
        exam.insert_query()

