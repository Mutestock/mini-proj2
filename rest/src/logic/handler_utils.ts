import { oak } from "../../deps.ts"
import { runQuery } from "../connection/pg_connection.ts"
import { config } from "../utils/config.ts";


// Doesn't need bodyGuard. No input values
async function queryHealthCheck() {
    const query = `SELECT * FROM ${config.database.test_db};`
    await runQuery(query);
}

export {
    queryHealthCheck,
}

