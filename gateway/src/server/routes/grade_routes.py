from pyramid.view import view_defaults, view_config
from pyramid.response import Response

from clients.rest.rest_grade import (
    grade_create,
    grade_read_list, grade_read_list_by_exam_id, grade_read_list_by_person_id,
    grade_update_by_exam_id, grade_update_by_person_id,
    delete_grade_by_exam_id, delete_by_person_id
)

from entities.grade import Grade


@view_defaults(route_name="grade", renderer="json")
class GradeBaseView():
    def __init__(self, request) -> None:
        self.request = request

    @view_config(request_method='POST')
    def create(self):
        grade_create(Grade.from_pyramid_request(self.request))
        return Response("200")

    @view_config(request_method='GET')
    def read_list(self):
        return Response(grade_read_list())


@view_defaults(route_name="grade", renderer="json")
class GradesExamIDView():
    def __init__(self, request) -> None:
        self.request = request

    @view_config(request_method='GET')
    def read_list_by_exam_id(request):
        
        return Response('')

    @view_config(request_method='PUT')
    def update_by_exam_id(request):
        return Response('')

    @view_config(request_method='DELETE')
    def delete_by_exam_id(request):
        return Response('')


@view_defaults(route_name="grade", renderer="json")
class GradesPersonIDView():
    def __init__(self, request) -> None:
        self.request = request

    @view_config(request_method='GET')
    def read_list_by_person_id(request):
        return Response('')

    @view_config(request_method='PUT')
    def update_by_person_id(request):
        return Response('')

    @view_config(request_method='DELETE')
    def delete_by_person_id(request):
        return Response('')


def collect_routes(configurator):
    configurator.add_route('grade', '/grade/p-id?:{id:\d+}')
    configurator.add_route('grade', '/grade')
    configurator.add_route('grade', '/grade/e-id:{id:\d+}')
