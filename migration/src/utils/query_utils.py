

def _get_sql(folder: str, sql_script_type: str) -> str:
    filename = f"{folder}/{sql_script_type}.sql"
    content = ""
    with open(filename) as f:
        content = f.read()
    return content

def get_up_sql(folder: str) -> str:
    return _get_sql(folder, "up")

def get_down_sql(folder: str) -> str:
    return _get_sql(folder, "down")