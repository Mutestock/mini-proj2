from aiohttp import web
from clients.rest.rest_grade import (
    grade_create, 
    grade_read_list, grade_read_list_by_exam_id, grade_read_list_by_person_id,
    grade_update_by_exam_id, grade_update_by_person_id,
    delete_grade_by_exam_id, delete_by_person_id
)

routes = web.RouteTableDef()


##### Post ######

@routes.post('/grade')
async def create(request):
    return web.Response(text="Hello, world")

##### Get #####

@routes.get('/grade/p-id?{id}')
async def read_list_by_person_id(request):
    return web.Response(text="Hello, world")

@routes.get('/grade/e-id?{id}')
async def read_list_by_exam_id(request):
    return web.Response(text="Hello, world")

@routes.get('/grade')
async def read_list(request):
    return web.Response(text="Hello, world")

##### Put #####

@routes.put('/grade/p-id?{id}')
async def update_by_person_id(request):
    return web.Response(text="Hello, world")

@routes.put('/grade/e-id?{id}')
async def update_by_exam_id(request):
    return web.Response(text="Hello, world")

##### Delete #####

@routes.delete('/grade/e-id?{id}')
async def delete_by_exam_id(request):
    return web.Response(text="Hello, world")

@routes.delete('/grade/p-id?{id}')
async def delete_by_person_id(request):
    return web.Response(text="Hello, world")