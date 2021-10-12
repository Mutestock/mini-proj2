from waitress import serve
from pyramid.config import Configurator
from server.routes import school_class_routes
from utils.config import CONFIG

route_configurator = Configurator


def run_server():
    try:
        with Configurator as config:
            config = school_class_routes(config)
            app = config.make_wsgi_app()
        serve(app, host=config["server"]["host"],
              port=config['server']["port"])
    except Exception as e:
        print(e)
