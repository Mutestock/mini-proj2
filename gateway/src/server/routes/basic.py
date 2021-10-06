from aiohttp import web

routes = web.RouteTableDef()


@routes.get('/')
async def hello(request):
    return web.Response(text="This is a health check. It means the gateway is up and running. Usually as simple 'OK' is enough")
