import requests
from utils.config import CONFIG
import json as JSON

_CLIENT_CONFIG: str = CONFIG["clients"]["bus"]["mini-proj"]
_PREFIX: str = f"http://{_CLIENT_CONFIG['host']}:{_CLIENT_CONFIG['port']}/api/grade"
_HEADERS = {"Content-Type": "application/json"}


##### Post #####


def grade_create(grade):
    try:
        return requests.post(
            _PREFIX, data=JSON.dumps(grade.__dict__), headers=_HEADERS
        ).text
    except Exception as e:
        print(e)


##### Get #####


def grade_read_list():
    try:
        return JSON.dumps(requests.get(_PREFIX).json())
    except Exception as e:
        print(e)


def grade_read_list_by_person_id(id: int):
    try:
        return JSON.dumps(requests.get(f"{_PREFIX}/p-id/{id}").json())
    except Exception as e:
        print(e)


def grade_read_list_by_exam_id(id: int):
    try:
        return JSON.dumps(requests.get(f"{_PREFIX}/e-id/{id}").json())
    except Exception as e:
        print(e)


##### Put #####


def grade_update_by_person_id(id, grade):
    try:
        return requests.put(
            f"{_PREFIX}/p-id/{id}", data=JSON.dumps(grade.__dict__), headers=_HEADERS
        ).text
    except Exception as e:
        print(e)


def grade_update_by_exam_id(id, grade):
    try:
        return requests.put(
            f"{_PREFIX}/e-id/{id}", data=JSON.dumps(grade.__dict__), headers=_HEADERS
        ).text
    except Exception as e:
        print(e)


##### Delete #####


def grade_delete_by_person_id(id):
    try:
        return requests.delete(f"{_PREFIX}/p-id/{id}").text
    except Exception as e:
        print(e)


def grade_delete_by_exam_id(id):
    try:
        return requests.delete(f"{_PREFIX}/e-id/{id}").text
    except Exception as e:
        print(e)
