import {asserts} from "../deps.ts"
import {config} from "../src/utils/config.ts";
import { queryHealthCheck } from "../src/logic/handler_utils.ts"


// Assert not failed. See documentation on asserts.ts for details.
// Should be improved
// Will always fail if a database hasn't been set up.

Deno.test('Postgres database connection established', () => {
    queryHealthCheck();
})

Deno.test('Config file works',() => {
    asserts.assert(typeof config.database.pg_port ==="number");
    asserts.assert(typeof config.database.pg_user ==="string");
    asserts.assert(config.database !== undefined);
});
