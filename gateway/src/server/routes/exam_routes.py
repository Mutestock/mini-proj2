from aiohttp import web

routes = web.RouteTableDef()


@routes.post('/exam')
async def create(request):
    return web.Response(text="Hello, world")


@routes.get('/exam/{id}')
async def read(request):
    return web.Response(text="Hello, world")


@routes.put('/exam/{id}')
async def update(request):
    return web.Response(text="Hello, world")


@routes.delete('/exam/{id}')
async def delete(request):
    return web.Response(text="Hello, world")


@routes.get('/exam')
async def read_list(request):
    return web.Response(text="Hello, world")

