from clients.rest.rest_exam import create_exam, read_exam, update_exam, delete_exam, read_list_exam
from entities.exam import Exam
from flask import current_app as app

# https://stackoverflow.com/questions/32615167/restful-design-in-pyramid-view-configuration


def exam_route_create():
    pass


def exam_route_read_list():
    return read_list_exam()
    #return 200 


def exam_route_update(id):
    pass


def exam_route_delete(id):
    pass


def exam_route_read(id):
    return id


def collect_routes(app):
    app.add_url_rule("/exam", view_func=exam_route_create, methods=["POST"])
    app.add_url_rule("/exam", view_func=exam_route_read_list, methods=["GET"])
    app.add_url_rule("/exam/<int:id>", view_func=exam_route_update, methods=["PUT"])
    app.add_url_rule("/exam/<int:id>", view_func=exam_route_delete, methods=["DELETE"])
    app.add_url_rule("/exam/<int:id>", view_func=exam_route_read, methods=["GET"])