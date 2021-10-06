from aiohttp import web
from routes import basic, exam_routes, person_routes, school_class_routes


def app_setup():
    app = web.Application()
    app.add_routes([
        basic.routes,
        exam_routes.routes,
        person_routes.routes,
        school_class_routes.routes
    ])
    return app

def run_app():
    web.run_app(app_setup())    

