import time

from logic.pg_table_exec import migrate_up, migrate_down
from logic.pg_data_pop import populate



"""
For new entities:

1. Insert up/down migration in migrations folder
2. make new entity with the same setup as the others
3. Put your create/drop function calls in logic/pg_table_exec
4. (optional) Populate data in pg_data_pop

"""









# Sleep to allow postgres to start up in container
# Alternative would be wait-for-it.sh
def main() -> None:
    time.sleep(5.0)
    migrate_down()
    migrate_up()
    populate()


if __name__ == "__main__":
    main()
