import { makeSqliteConnection } from "../connection/sqlite_connection.ts"
import { config } from "../utils/config.ts";


// Doesn't need bodyGuard. No input values
function queryHealthCheck() {
    const conn = makeSqliteConnection();
    const query = `SELECT * FROM ${config.database.db};`
    conn.query(query);
    conn.close();
}

export {
    queryHealthCheck,
}

