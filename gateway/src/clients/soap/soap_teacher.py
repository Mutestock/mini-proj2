import zeep
from utils.config import CONFIG

_CLIENT_CONFIG= CONFIG['clients']['soap']['mini-proj']
_WSDL_URL = f"{_CLIENT_CONFIG['host']}:{_CLIENT_CONFIG['port']}/Service.svc?WSDL"


def _create_client():
    return zeep.Client(wsdl=_WSDL_URL)


def create_teacher(new_teacher):
    _create_client().service.AddTeacher(new_teacher)


def read_teacher(id):
    _create_client().service.GetTeacher(id)


def update_teacher(id, new_teacher):
    _create_client().service.UpdateTeacher(id, new_teacher)


def delete_teacher(id):
    _create_client().service.DeleteTeacher(id)


def read_list_teacher():
    _create_client().service.GetAllTeachers()
