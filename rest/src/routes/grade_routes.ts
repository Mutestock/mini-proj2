import {oak} from "../../deps.ts";
import {create, read, update, _delete, readList} from "../logic/grade_handler.ts"

const routePrefix = "/grade"

function gradeRoutes(router: oak.Router): oak.Router { 
    router
        .get(routePrefix, async (context) => {
            context.response.body = await (await readList());
        })
        .get<{id: string}>(routePrefix+"/:id", async (context) => {
            context.response.body = await read(context.params.id);
        })
        .post(routePrefix, async (context: oak.RouterContext) => {
            await create(context);
            context.response.body = "201"
        })
        .put<{id: string}>(routePrefix+"/:id", async (context: oak.RouterContext<{id: string}, Record<string, any>>) => {
            await update(context);
            context.response.body ="204";
        })
        .delete<{id: string}>(routePrefix+"/:id", async (context) => {
            await _delete(context.params.id)
            context.response.body ="200"
        })
    return router;  
}

export {
    gradeRoutes,
}