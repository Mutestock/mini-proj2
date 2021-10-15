from clients.grpc.grpc_person import (create_person, delete_person,
                                      read_person, read_person_list,
                                      update_person)
from entities.person import Person
from flask import current_app as app



def person_route_create():
   pass
   
def person_route_read_list():
   pass

def person_route_update(id):
   pass
   

def person_route_delete(id):
   pass
   
   
def person_route_read(id):
   pass

def collect_routes(app):
    app.add_url_rule("/person", view_func=person_route_create, methods=["POST"])
    app.add_url_rule("/person", view_func=person_route_read_list, methods=["GET"])
    app.add_url_rule("/person/<int:id>", view_func=person_route_update, methods=["PUT"])
    app.add_url_rule("/person/<int:id>", view_func=person_route_delete, methods=["DELETE"])
    app.add_url_rule("/person/<int:id>", view_func=person_route_read, methods=["GET"])