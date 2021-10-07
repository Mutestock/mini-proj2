
class Exam():
    def __init__(self, name) -> None:
        self.name = name

    @staticmethod
    def from_request(request):
        return Exam(
            name=request.name,
        )
        