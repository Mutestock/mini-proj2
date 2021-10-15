class Grade:
    def __init__(self, person_id, exam_id, symbol):
        self.person_id = person_id
        self.exam_id = exam_id
        self.symbol = symbol

    @classmethod
    def from_request(data):
        return Grade(
            person_id=request.get("person_id"),
            exam_id=request.get("exam_id"),
            symbol=request.get("symbol"),
        )
