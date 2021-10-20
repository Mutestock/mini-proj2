from entities.school_class import SchoolClass2
from clients.soap.soap_school_class import (
    create_school_class,
    # delete_school_class,
    read_school_class,
    read_list_school_class,
    # update_school_class,
)
from flask import request
import json


def school_class_route_create():
    pass


def school_class_route_read_list():
    classes = read_list_school_class()
    return json.dumps(classes[0].subject)


#
# def school_class_route_create():
#     update_school_class(SchoolClass.from_request(some_id_from_somewhere, .request))
#     return Response("200")

#
# def school_class_route_delete():
#    delete_school_class(some_id_from_somewhere)
#    return Response("200")


def school_class_route_read(id):
    pass


def collect_routes(app):
    app.add_url_rule(
        "/school-class", view_func=school_class_route_create, methods=["POST"]
    )
    app.add_url_rule(
        "/school-class", view_func=school_class_route_read_list, methods=["GET"]
    )
    # app.add_url_rule("/school-class/<int:id>", view_func=school_class_route_update, methods=["PUT"])
    # app.add_url_rule("/school-class/<int:id>", view_func=school_class_route_delete, methods=["DELETE"])
    app.add_url_rule(
        "/school-class/<int:id>", view_func=school_class_route_read, methods=["GET"]
    )
