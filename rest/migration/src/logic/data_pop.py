from entities.exam import Exam


def populate() -> None:
    for exam in [
        Exam("Biology"),
        Exam("French"),
        Exam("Baking"),
        Exam("Janitoring"),
        Exam("Hammerthrowing"),
        Exam("Flamethrowing"),
        Exam("Scimitar throwing on camels"),
        Exam("Trebuchet Building"),
        Exam("Crab Robbing"),
        Exam("Pufferfish Feeding")
    ]:
        exam.insert_query()

