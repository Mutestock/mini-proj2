import time

from logic.table_exec import migrate_up, migrate_down
from logic.data_pop import populate

"""
For new entities:

1. Insert up/down migration in migrations folder
2. make new entity with the same setup as the others
3. Put your create/drop function calls in logic/pg_table_exec
4. (optional) Populate data in pg_data_pop

"""

def main() -> None:
    #time.sleep(5.0)
    migrate_down()
    migrate_up()
    populate()


if __name__ == "__main__":
    main()
