from pyramid.view import view_defaults, view_config
from pyramid.response import Response

from clients.grpc.grpc_person import (create_person, delete_person,
                                      read_person, read_person_list,
                                      update_person)
from entities.person import Person



# Routes that only require base
@view_defaults(route_name="school-class", renderer="json")
class PersonView():
    def __init__(self, request) -> None:
        self.request = request

    @view_config(request_method='POST')
    def create(self):
        create_person(Person.from_pyramid_request(self.request))
        return Response("200")


    #Still pretty unknown here
    @view_config(request_method="GET")
    def read_list(self):
        return Response(read_list_person(Person.from_request_list(self.request)))


# Routes that require id
@view_defaults(route_name="school-class", renderer="json")
class PersonIDView():
    def __init__(self, request) -> None:
        self.request = request

    @view_config(request_method='PUT')
    def create(self):
        update_person(Person.from_pyramid_request(some_id_from_somewhere, self.request))
        return Response("200")


    @view_config(request_method='DELETE')
    def delete(self):
        delete_person(some_id_from_somewhere)
        return Response("200")

    
    #Still pretty unknown here
    @view_config(request_method="GET")
    def read(self):
        return Response(read_person(Person.from_pyramid_request(self.request)))


def collect_routes(configurator):
    configurator.add_route('school-class', '/school-class/{id:\d+}')
    configurator.add_route('school-class', '/school-class')
    return configurator