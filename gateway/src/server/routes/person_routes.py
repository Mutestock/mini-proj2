from clients.grpc.grpc_person import (
    create_person,
    delete_person,
    read_person,
    read_person_list,
    update_person,
)
from clients.rest.rest_bus import person_read_list_passed
from entities.person import NewPerson
from flask import request


def person_route_create():
    try:
        create_person(NewPerson.from_json(request.json))
        return "200"
    except Exception as e:
        print(e)
        return "500"


def person_route_read_list():
    return read_person_list()


def person_route_update(id):
    try:
        update_person(id, NewPerson.from_json(request.json))
        return "200"
    except Exception as e:
        print(e)
        return "500"

def person_route_delete(id):
    try:
        delete_person(id)
        return "204"
    except Exception as e:
        print(e)
        return "500"


def person_route_read(id):
    return read_person(id)

def person_route_read_list_passed():
    return person_read_list_passed()


def collect_routes(app):
    app.add_url_rule("/person", view_func=person_route_create, methods=["POST"])
    app.add_url_rule("/person", view_func=person_route_read_list, methods=["GET"])
    app.add_url_rule("/person/passed", view_func=person_route_read_list_passed, methods=["GET"])
    app.add_url_rule("/person/<int:id>", view_func=person_route_update, methods=["PUT"])
    app.add_url_rule(
        "/person/<int:id>", view_func=person_route_delete, methods=["DELETE"]
    )
    app.add_url_rule("/person/<int:id>", view_func=person_route_read, methods=["GET"])
