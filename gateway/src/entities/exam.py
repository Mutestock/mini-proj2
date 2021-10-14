
class Exam():
    def __init__(self, name, examination_date) -> None:
        self.name = name
        self.examination_date = examination_date

    @classmethod
    def from_request(request):
        return Exam(
            name=request.POST.get('name'),
            examination_date=request.POST.get('examination_date'),
        )
        
    