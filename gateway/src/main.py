from server.grpc_server import serve
import logging


def main() -> None:
    logging.basicConfig()
    serve()


if __name__ == "__main__":
    main()
