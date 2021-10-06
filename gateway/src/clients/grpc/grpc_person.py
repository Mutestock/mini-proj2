from logic.protogen import person_pb2_grpc
from utils.config import CONFIG
import grpc

_CLIENT_CONFIG: str = CONFIG["clients"]["rest"]["mini-proj"]


def _create_stub():
    channel = grpc.insecure_channel(
        f"{_CLIENT_CONFIG['host']}:{_CLIENT_CONFIG['port']}")
    return person_pb2_grpc.PersonStub(channel)


def create_person(person):
    return _create_stub().CreatePersonRequest(person)


def read_person(id):
    return _create_stub().ReadPerson(id)


def update_person(id, person):
    return _create_stub().UpdatePersonRequest(id, person)


def delete_person(id):
    return _create_stub().DeletePersonRequest(id)


def read_person_list():
    return _create_stub().ReadPersonListRequest()
