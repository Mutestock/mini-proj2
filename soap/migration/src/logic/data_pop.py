from entities.school_class import SchoolClass


def populate() -> None:
    for school_class in [
        SchoolClass("John", "Doe", "39-39-21-21", "aspkd@asd.cs", "student"),
        SchoolClass("Jane", "Doe", "32-1-3-12", "sdsvd@cake.flerp", "student"),
        SchoolClass("Some Name", "Doe", "02-93-98", "murp@flerp.herp", "student"),
        SchoolClass("Ham", "Burger", "21-31-23-124", "asdas@acsc.1231as", "student"),
        SchoolClass("Michael", "Bay", "83-75-83-4", "Uber@Cake.onion", "student"),
        SchoolClass("Herb", "Derp", "02-39-42", "apsdofk@asd.cs", "teacher"),
        SchoolClass("Ice", "Cone",
                "92-03-49-02", "jason@bourne.asc", "student"),
        SchoolClass("To", "Heck", "234-02-93-78-8", "aosdk@aacs.acsc", "teacher"),
        SchoolClass("Newt", "Fisher", "23-94-23-84", "ccasa@acsåpo.asd", "student"),
        SchoolClass("Purd", "Norton", "99-12-31-2", "cmcmcam@qwweqwd.xzc", "student")
    ]:
        school_class.insert_query()

