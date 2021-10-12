from aiohttp import web
from clients.grpc.grpc_person import (create_person, delete_person,
                                      read_person, read_person_list,
                                      update_person)
from entities.person import Person

routes = web.RouteTableDef()

class PersonView():
    pass

class PersonIDView():
    pass




@routes.post('/person')
async def create(request):
    data = request.post()
    create_person(Person.from_request(data))
    return web.Response(text="200")


@routes.get('/person/{id}')
async def read(request):
    data = request.match_info
    person = read_person(Person.from_request(data))
    return web.json_response(person)


@routes.put('/person/{id}')
async def update(request):
    data = dir(request)
    return web.Response(text="Hello, world")


@routes.delete('/person/{id}')
async def delete(request):
    dir(request)
    return web.Response(text="Hello, world")


@routes.get('/person')
async def read_list(request):
    return web.Response(text="Hello, world")
