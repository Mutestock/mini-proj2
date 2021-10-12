from pyramid.response import Response
from clients.rest.rest_exam import create_exam, read_exam, update_exam, delete_exam, read_list_exam

# https://stackoverflow.com/questions/32615167/restful-design-in-pyramid-view-configuration

BASE_URL = '/exam'

class ExamViews():
    pass

class ExamIdViews():
    pass

def create(request):
    return web.Response(text="Hello, world")


def read(request):
    return web.Response(text="Hello, world")


def update(request):
    return web.Response(text="Hello, world")


def delete(request):
    return web.Response(text="Hello, world")


def read_list(request):
    return web.Response(text="Hello, world")

def collect_exam_routes(configurator):
    configurator.add_route("create",f'{BASE_URL}/')


@routes.post('/exam')
@routes.get('/exam/{id}')
@routes.put('/exam/{id}')
@routes.delete('/exam/{id}')
@routes.get('/exam')
