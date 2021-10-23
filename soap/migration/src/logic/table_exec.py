from entities.school_class import SchoolClass


def migrate_down() -> None:
    SchoolClass.drop_table()

def migrate_up() -> None:
    SchoolClass.create_table()
