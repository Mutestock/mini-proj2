from server.server import run_server
import logging
from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.response import Response
from server.routes import school_class_routes
from utils.config import CONFIG
from server.routes import exam_routes


def main() -> None:
    #logging.basicConfig()
    run_server()

if __name__ == "__main__":
    #main()
    host = CONFIG["server"]["host"]
    port = CONFIG["server"]["port"]

    with Configurator() as config:
        #config = school_class_routes(config)
        config = exam_routes.collect_routes(config)
        app = config.make_wsgi_app()
        
    print(f"Starting server at {host}:{port}...")
    server = make_server(host, port, app)
    server.serve_forever()


#def hello_world(request):
#    return Response('Hello World!')
#
#
#if __name__ == '__main__':
#    with Configurator() as config:
#        #config.add_route('hello', '/')
#        #config.add_view(hello_world, route_name='hello')
#        app = config.make_wsgi_app()
#    server = make_server('0.0.0.0', 6543, app)
#    server.serve_forever()