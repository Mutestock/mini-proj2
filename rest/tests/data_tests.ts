import { runQuery } from '../src/connection/pg_connection.ts';
import { postgres } from "../deps.ts";
import { asserts } from "../deps.ts";

// Needs test database
// In memory database for testing?

const getClearConfiguration = (): postgres.ClientOptions => {
    return {
        database: "postgres",
        hostname: "postgres",
        password: "postgres",
        port: 5432,
        user: "test",
    };
}


Deno.test('Test In Memory Test database', async () => {
    const client = new postgres.Client(getClearConfiguration());
    await client.connect();
    await client.end();
    // Assuming that shit breaks if it doesn't work before hitting the assert.
    // Just until my brain gets larger
    asserts.assert(2===2);
});

Deno.test("Test Create Grade", () => {
    const client = new postgres.Client(getClearConfiguration());
    client.connect();
    client.end();
})

Deno.test("Test Read Grade", () => {

})

Deno.test("Update Grade", () => {

})

Deno.test("Delete Grade", () => {

})

Deno.test("Read List Grade", () => {

})




