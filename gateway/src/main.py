from server.server import run_server
import logging


def main() -> None:
    logging.basicConfig()
    run_server()


if __name__ == "__main__":
    main()
