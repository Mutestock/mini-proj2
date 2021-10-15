from logic.protogen import person_pb2_grpc
from logic.protogen import person_pb2
from utils.config import CONFIG
import grpc
from entities.person import Person
import json as JSON

_CLIENT_CONFIG: str = CONFIG["clients"]["grpc"]["mini-proj"]


def _create_stub():
    channel = grpc.insecure_channel(
        f"{_CLIENT_CONFIG['host']}:{_CLIENT_CONFIG['port']}"
    )
    return person_pb2_grpc.PersonStub(channel)


def create_person(person):
    response = _create_stub().CreatePerson(
        person_pb2.CreatePersonRequest(
            first_name=person.first_name,
            last_name=person.last_name,
            phone_number=person.phone_number,
            email=person.email,
            role=person.role,
        )
    )
    return response.message


def read_person(id):
    response = _create_stub().ReadPerson(person_pb2.ReadPersonRequest(id=id))
    return JSON.dumps(Person.from_grpc_response(response).__dict__)


def update_person(id, person):
    response = _create_stub().UpdatePerson(
        person_pb2.UpdatePersonRequest(
            id=id,
            first_name=person.first_name,
            last_name=person.last_name,
            phone_number=person.phone_number,
            email=person.email,
            role=person.role,
        )
    )
    return response.message


def delete_person(id):
    response = _create_stub().DeletePerson(person_pb2.DeletePersonRequest(id=id))
    return response.message


def read_person_list():
    response = _create_stub().ReadPersonList(person_pb2.ReadPersonListRequest())
    return JSON.dumps(Person.from_grpc_response_list(response))


