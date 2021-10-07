from entities.person import Person


def migrate_down() -> None:
    Person.drop_table()

def migrate_up() -> None:
    Person.create_table()
