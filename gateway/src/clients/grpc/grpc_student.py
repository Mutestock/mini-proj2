from logic.protogen.incoming import student_pb2_grpc
from utils.config import CONFIG
import grpc

_CLIENT_CONFIG: str = CONFIG["clients"]["rest"]["mini-proj"]


def _create_stub():
    channel = grpc.insecure_channel(
        f"{_CLIENT_CONFIG['host']}:{_CLIENT_CONFIG['port']}")
    return student_pb2_grpc.StudentStub(channel)


def create_student(student):
    return _create_stub().CreateStudentRequest(student)


def read_student(id):
    return _create_stub().ReadStudent(id)


def update_student(id, student):
    return _create_stub().UpdateStudentRequest(id, student)


def delete_student(id):
    return _create_stub().DeleteStudentRequest(id)


def read_student_list():
    return _create_stub().ReadStudentListRequest()
