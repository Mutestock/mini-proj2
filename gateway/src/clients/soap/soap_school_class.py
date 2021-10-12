import zeep
from utils.config import CONFIG

_CLIENT_CONFIG= CONFIG['clients']['soap']['mini-proj']
_WSDL_URL = f"{_CLIENT_CONFIG['host']}:{_CLIENT_CONFIG['port']}/Service.svc?WSDL"


def _create_client():
    return zeep.Client(wsdl=_WSDL_URL)


### Update below to school-class wsdl functions

def create_school_class(new_school_class):
    _create_client().service.AddSchoolClass(new_school_class)


def read_school_class(id):
    _create_client().service.GetSchoolClass(id)


def update_school_class(id, new_school_class):
    _create_client().service.UpdateSchoolClass(id, new_school_class)


def delete_school_class(id):
    _create_client().service.DeleteSchoolClass(id)


def read_list_school_class():
    _create_client().service.GetAllSchoolClasses()
