from pyramid.view import view_defaults, view_config
from pyramid.response import Response
from clients.rest.rest_exam import create_exam, read_exam, update_exam, delete_exam, read_list_exam
from entities.exam import Exam


# https://stackoverflow.com/questions/32615167/restful-design-in-pyramid-view-configuration


# Routes that only require base
@view_defaults(route_name="school-class", renderer="json")
class ExamView():
    def __init__(self, request) -> None:
        self.request = request

    @view_config(request_method='POST')
    def create(self):
        create_exam(Exam.from_request(self.request))
        return Response("200")

    # Still pretty unknown here

    @view_config(request_method="GET")
    def read_list(self):
        return Response(read_list_exam(Exam.from_request_list(self.request)))


# Routes that require id
@view_defaults(route_name="school-class", renderer="json")
class ExamIDView():
    def __init__(self, request) -> None:
        self.request = request

    @view_config(request_method='PUT')
    def create(self):
        update_exam(Exam.from_request(self.request.POST.get(
            "id"), Exam.from_request(self.request)))
        return Response("200")

    @view_config(request_method='DELETE')
    def delete(self):
        delete_exam(self.request.POST.get("id"))
        return Response("200")

    # Still pretty unknown here

    @view_config(request_method="GET")
    def read(self):
        return Response(read_exam(self.request.POST.get("id")))


def collect_routes(configurator):
    configurator.add_route('school-class', '/school-class/{id:\d+}')
    configurator.add_route('school-class', '/school-class')
    return configurator
