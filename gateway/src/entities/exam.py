
class Exam():
    def __init__(self, name) -> None:
        self.name = name

    @classmethod
    def from_pyramid_request(request):
        return Grade(
            person_id=request.POST.get('person_id'),
            exam_id=request.POST.get('exam_id'),
            symbol=request.POST.get('symbol')
        )