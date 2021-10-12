
class Person():
    def __init__(self, first_name, last_name, phone_number, email, role) -> None:
        self.first_name = first_name
        self.last_name = last_name
        self.phone_number = phone_number
        self.email = email
        self.role = role
        
    @classmethod
    def from_request(data):
        return Person(
            first_name=data['first_name'],
            last_name=data['last_name'],
            phone_number=data['phone_number'],
            email=data['email'],
            role=data['role']
        )

    @classmethod
    def from_pyramid_request(request):
        return Person(
            first_name = request.POST.get('first_name'),
            last_name = request.POST.get('last_name'),
            phone_number= request.POST.get('phone_number'),
            email = request.POST.get('email'),
            role = request.POST.get('role')
        )