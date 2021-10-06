from server.server import run_app
import logging


def main() -> None:
    logging.basicConfig()
    run_app()


if __name__ == "__main__":
    main()
