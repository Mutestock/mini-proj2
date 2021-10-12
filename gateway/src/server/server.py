from waitress import serve
from pyramid.config import Configurator
from server.routes import basic, exam_routes, person_routes, school_class_routes

route_configurator = Configurator

def app_setup():
    try:
        with Configurator as config:
            config.
            return app
    except Exception as e:
        print(e)
