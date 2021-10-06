
class Teacher():
    def __init__(self, first_name, last_name, phone_number, email) -> None:
        self.first_name = first_name
        self.last_name = last_name
        self.phone_number = phone_number
        self.email = email

    @classmethod
    def from_request(request):
        return Teacher(
            first_name=request.first_name,
            last_name=request.last_name,
            phone_number=request.phone_number,
            email=request.email
        )
