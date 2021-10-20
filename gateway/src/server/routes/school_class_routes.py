from entities.school_class import SchoolClass
from clients.soap.soap_school_class import (
    create_school_class,
    read_school_class,
    read_list_school_class,
    add_person
)
from flask import request
import json


def school_class_route_create():
    return create_school_class(request.json.get("subject"))

def school_class_route_read_list():
    classes = read_list_school_class()
    return json.dumps([schoolClass.__dict__ for schoolClass in classes], default=str)

def school_class_add_person():
    classId = request.json.get("classId")
    personId = request.json.get("personId")
    add_person(classId, personId)


def school_class_route_read(id):
    schoolClass = read_school_class(id)
    return json.dumps(schoolClass.__dict__, default=str)


def collect_routes(app):
    app.add_url_rule(
        "/school-class", view_func=school_class_route_create, methods=["POST"]
    )
    app.add_url_rule(
        "/school-class", view_func=school_class_route_read_list, methods=["GET"]
    )
    app.add_url_rule(
        "/school-class/add-person", view_func=school_class_add_person, methods=["POST"]
    )
    app.add_url_rule(
        "/school-class/<int:id>", view_func=school_class_route_read, methods=["GET"]
    )
