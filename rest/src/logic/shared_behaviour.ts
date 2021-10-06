
import { runQuery } from "../connection/pg_connection.ts"
import { oak } from "../../deps.ts"

async function queryInsertObject(newObject: Object, tableName: string) {

    const objectKeys = Object.keys(newObject);
    const objectEntries = Object.entries(newObject);

    let query = `INSERT INTO ${tableName}(`
    for (const key of objectKeys) {
        if (objectKeys.indexOf(key) !== objectKeys.length - 1) {
            query += `${key},`
        }
        else {
            query += `${key}`
        }
    }
    query += ") VALUES("
    for (const [key, value] of objectEntries) {
        if (objectKeys.indexOf(key) !== objectKeys.length - 1) {
            query += `'${value}',`
        }
        else {
            query += `'${value}'`
        }
    }
    query += `);`
    await runQuery(query);
}

function queryBodyGuard(context: oak.RouterContext | oak.RouterContext<{ id: string }, Record<string, any>>) {
    if (!context.request.hasBody) {
        context.throw(oak.Status.BadRequest, "Bad Request");
    }
    if (context.request.body().type !== "json") {
        context.throw(oak.Status.BadRequest, "Bad Request");
    }
}

async function queryReadObject(tableName: string, id: string) {
    const query = `SELECT * FROM ${tableName} WHERE id = ${id}`;
    const grade = await runQuery(query)
    return grade
}

async function queryUpdateObject(newObject: Object, tableName: string, id: string) {
    let query = `UPDATE ${tableName} SET `

    const objectKeys = Object.keys(newObject);
    const objectEntries = Object.entries(newObject);

    for (const [key, value] of objectEntries) {
        if (objectKeys.indexOf(key) !== objectKeys.length - 1) {
            query += `${key}='${value}',`
        }
        else {
            query += `${key}='${value}'`
        }
    }
    query += ` WHERE id = ${id};`;

    await runQuery(query);
}

async function queryDeleteObject(tableName: string, id: string) {
    await runQuery(`DELETE FROM ${tableName} WHERE id = ${id}`)
}

async function queryReadObjectList(tableName: string) {
    return await runQuery(`SELECT * FROM ${tableName}`)
}

export {
    queryInsertObject, queryBodyGuard, queryReadObject, queryDeleteObject, queryUpdateObject, queryReadObjectList
}