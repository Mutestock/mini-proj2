import requests
from utils.config import CONFIG
import json as JSON

_CLIENT_CONFIG: str = CONFIG["clients"]["bus"]["mini-proj"]
_PREFIX: str = f"http://{_CLIENT_CONFIG['host']}:{_CLIENT_CONFIG['port']}/api/hybrid"
_HEADERS = {"Content-Type": "application/json"}


##### Post #####

##### Get #####


def person_read_list_passed():
    print(_PREFIX)
    try:
        return JSON.dumps(requests.get(f"{_PREFIX}/passed").json())
    except Exception as e:
        print()



##### Put #####


##### Delete #####

