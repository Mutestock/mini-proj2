class Grade():
    def __init__(self, person_id, exam_id, symbol):
        self.person_id = person_id
        self.exam_id = exam_id
        self.symbol = symbol

    @classmethod
    def from_request(request):
        return Grade(
            person_id=request.POST.get('person_id'),
            exam_id=request.POST.get('exam_id'),
            symbol=request.POST.get('symbol')
        )
        
        
        
    