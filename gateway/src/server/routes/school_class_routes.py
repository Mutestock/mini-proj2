from aiohttp import web

routes = web.RouteTableDef()


@routes.post('/school-class')
async def create(request):
    return web.Response(text="Hello, world")


@routes.get('/school-class/{id}')
async def read(request):
    return web.Response(text="Hello, world")


@routes.put('/school-class/{id}')
async def update(request):
    return web.Response(text="Hello, world")


@routes.delete('/school-class/{id}')
async def delete(request):
    return web.Response(text="Hello, world")


@routes.get('/school-class')
async def read_list(request):
    return web.Response(text="Hello, world")

