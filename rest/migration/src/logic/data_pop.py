from entities.exam import Exam


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
        
    

