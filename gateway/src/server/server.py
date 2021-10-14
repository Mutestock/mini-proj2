from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from server.routes import school_class_routes
from utils.config import CONFIG

route_configurator = Configurator


def run_server():
    # try:
    with Configurator as config:
        config = school_class_routes(config)
        app = config.make_wsgi_app()
    print("Starting server server...")
    server = make_server(CONFIG["server"]["host"],
                         CONFIG['server']["port"], app)
    server.serve_forever()
    # except Exception as e:
    #    print(f'Error happened on server start: {e}')
