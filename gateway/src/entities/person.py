
class Person():
    def __init__(self, first_name, last_name, phone_number, email, role) -> None:
        self.first_name = first_name
        self.last_name = last_name
        self.phone_number = phone_number
        self.email = email
        self.role = role
        
    @classmethod
    def from_request(request):
        return Person(
            first_name = request.form['first_name'],
            last_name = request.form['last_name'],
            phone_number= request.form['phone_number'],
            email = request.form['email'],
            role = request.form['role'],
        )