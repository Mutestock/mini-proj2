
class SchoolClass():
    def __init__(self, first_name, last_name, phone_number, email) -> None:
        self.first_name = first_name
        self.last_name = last_name
        self.phone_number = phone_number
        self.email = email

    @classmethod
    def from_request(request):
        return SchoolClass(
            first_name = request.form['first_name'],
            last_name = request.form['last_name'],
            phone_number= request.form['phone_number'],
            email = request.form['email'],
            role = request.form['role']
        )