from logic.protogen.outgoing.teacher_out_pb2 import ReadListTeacherResponse, ReadTeacherResponse


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

    @staticmethod
    def to_grpc_read_response(teacher) -> ReadTeacherResponse:
        return ReadTeacherResponse(
            first_name=teacher.first_name,
            last_name=teacher.last_name,
            phone_number=teacher.phone_number,
            email=teacher.email
        )

    @staticmethod
    def to_grpc_read_list_response(teacher_list) -> ReadListTeacherResponse:
        read_teacher_list_response = []
        for teacher in teacher_list:
            read_teacher_list_response.append(
                Teacher.to_grpc_read_response(teacher))
        return read_teacher_list_response
