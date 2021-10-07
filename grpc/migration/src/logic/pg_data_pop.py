from entities.person import Person


def populate() -> None:
    for person in [
        Person("John", "Doe", "39-39-21-21", "aspkd@asd.cs", "student"),
        Person("Jane", "Doe", "32-1-3-12", "sdsvd@cake.flerp", "student"),
        Person("Some Name", "Doe", "02-93-98", "murp@flerp.herp", "student"),
        Person("Ham", "Burger", "21-31-23-124", "asdas@acsc.1231as", "student"),
        Person("Michael", "Bay", "83-75-83-4", "Uber@Cake.onion", "student"),
        Person("Herb", "Derp", "02-39-42", "apsdofk@asd.cs", "student"),
        Person("Ice", "Wallow Komme",
                "92-03-49-02", "jason@bourne.asc", "student"),
        Person("To", "Heck", "234-02-93-78-8", "aosdk@aacs.acsc", "student"),
        Person("Newt", "Fisher", "23-94-23-84", "ccasa@acsåpo.asd", "student"),
        Person("Purd", "Norton", "99-12-31-2", "cmcmcam@qwweqwd.xzc", "student")
    ]:
        person.insert_query()

