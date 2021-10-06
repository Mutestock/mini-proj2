from aiohttp import web

routes = web.RouteTableDef()


@routes.post('/person')
async def create(request):
    return web.Response(text="Hello, world")


@routes.get('/person/{id}')
async def read(request):
    return web.Response(text="Hello, world")


@routes.put('/person/{id}')
async def update(request):
    return web.Response(text="Hello, world")


@routes.delete('/person/{id}')
async def delete(request):
    return web.Response(text="Hello, world")


@routes.get('/person')
async def read_list(request):
    return web.Response(text="Hello, world")

