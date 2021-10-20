from requests.api import request
from entities.school_class import SchoolClass2
import zeep
from utils.config import CONFIG

_CLIENT_CONFIG = CONFIG["clients"]["soap"]["mini-proj"]
_WSDL_URL = f"http://{_CLIENT_CONFIG['host']}:{_CLIENT_CONFIG['port']}/Service.svc?WSDL"


def _create_client():
    return zeep.Client(wsdl=_WSDL_URL)


def create_school_class(new_school_class):
    _create_client().service.CreateNewClass(new_school_class)


def read_school_class(id):
    _create_client().service.GetClass(id)


def read_list_school_class():
    classes = []
    for schoolClass in _create_client().service.GetAllClasses():\
        classes.append(SchoolClass2(schoolClass.Id, schoolClass.Subject, schoolClass.CreatedAt, schoolClass.UpdatedAt))
    print(_WSDL_URL)
    print(classes)
    return classes


def add_person_class(classId, personId):
    _create_client().service.AddPersonClass(classId, personId)


def add_people_class(classId, personIds):
    _create_client().service.AddPeopleClass(classId, personIds)
