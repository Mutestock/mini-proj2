from pyramid.view import view_defaults, view_config
from pyramid.response import Response

from entities.school_class import SchoolClass
from clients.soap.soap_school_class import(
    create_school_class,
    #delete_school_class,
    read_school_class, read_list_school_class,
    #update_school_class,
)


# Routes that only require base
@view_defaults(route_name="school-class", renderer="json")
class SchoolClassView():
    def __init__(self, request) -> None:
        self.request = request

    @view_config(request_method='POST')
    def create(self):
        create_school_class(SchoolClass.from_request(self.request))
        return Response("200")


    #Still pretty unknown here
    @view_config(request_method="GET")
    def read_list(self):
        return Response(read_list_school_class(SchoolClass.from_request_list(self.request)))


# Routes that require id
@view_defaults(route_name="school-class", renderer="json")
class SchoolClassIDView():
    def __init__(self, request) -> None:
        self.request = request

    # @view_config(request_method='PUT')
    # def create(self):
    #     update_school_class(SchoolClass.from_request(some_id_from_somewhere, self.request))
    #     return Response("200")


    #@view_config(request_method='DELETE')
    #def delete(self):
    #    delete_school_class(some_id_from_somewhere)
    #    return Response("200")

    
    #Still pretty unknown here
    @view_config(request_method="GET")
    def read(self):
        return Response(read_school_class(SchoolClass.from_request(self.request)))


def collect_routes(configurator):
    configurator.add_route('school-class', '/school-class/{id:\d+}')
    configurator.add_route('school-class', '/school-class')
    return configurator