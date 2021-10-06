import requests
from utils.config import CONFIG
import json as JSON

_CLIENT_CONFIG: str = CONFIG["clients"]["rest"]["mini-proj"]
_PREFIX: str = f"http://{_CLIENT_CONFIG['host']}:{_CLIENT_CONFIG['port']}/grade"
_HEADERS = {"Content-Type":"application/json"}


def create_grade(grade):
    try:
        return requests.post(_PREFIX, data=JSON.dumps(grade.__dict__), headers=_HEADERS).text
    except Exception as e:
        print(e)


def read_grade(id):
    try:
        return requests.get(f"{_PREFIX}/{id}").json()
    except Exception as e:
        print(e)


def update_grade(id, grade):
    try:
        return requests.put(f"{_PREFIX}/{id}", data=JSON.dumps(grade.__dict__), headers=_HEADERS).text
    except Exception as e:
        print(e)


def delete_grade(id):
    try:
        return requests.delete(f"{_PREFIX}/{id}").text
    except Exception as e:
        print(e)


def read_list_grade():
    try:
        return requests.get(_PREFIX).json()
    except Exception as e:
        print(e)
