class SchoolClass:
    def __init__(self, first_name, last_name, phone_number, email) -> None:
        self.first_name = first_name
        self.last_name = last_name
        self.phone_number = phone_number
        self.email = email

    @staticmethod
    def from_json(request):
        return SchoolClass(
            first_name=data.get("first_name"),
            last_name=data.get("last_name"),
            phone_number=data.get("phone_number"),
            email=data.get("email"),
            role=data.get("role"),
        )
