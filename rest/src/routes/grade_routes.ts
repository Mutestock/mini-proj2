import { oak } from "../../deps.ts";
import {
    create,
    readList, readListByExamID, readListByPersonID, readListWhoFailed, readListWhoPassed,
    updateByExamID, updateByPersonID,
    deleteByExamID, deleteByPersonID,
} from "../logic/handlers/grade_handler.ts"

const routePrefix = "/grade"

function gradeRoutes(router: oak.Router): oak.Router {
    router
        .get(routePrefix, (context) => {
            context.response.body = readList();
        })
        .get(routePrefix + "/passed", (context) => {
            context.response.body = readListWhoPassed();
        })
        .get(routePrefix + "/failed", (context) => {
            context.response.body = readListWhoFailed();
        })
        .get<{ id: string }>(routePrefix + "/p-id-:id", (context) => {
            context.response.body = readListByPersonID(context.params.id as unknown as number);
        })
        .get<{ id: string }>(routePrefix + "/e-id-:id", (context) => {
            context.response.body = readListByExamID(context.params.id as unknown as number);
        })
        .post(routePrefix, async (context: oak.RouterContext) => {
            await create(context);
            context.response.body = "201"
        })
        .put<{ id: string }>(routePrefix + "/p-id-:id", async (context: oak.RouterContext<{ id: string }, Record<string, any>>) => {
            await updateByExamID(context);
            context.response.body = "204";
        })
        .put<{ id: string }>(routePrefix + "/p-id-:id", async (context: oak.RouterContext<{ id: string }, Record<string, any>>) => {
            await updateByPersonID(context);
            context.response.body = "204";
        })
        .delete<{ id: string }>(routePrefix + "/e-id-:id", async (context) => {
            await deleteByExamID(context.params.id as unknown as number)
            context.response.body = "200"
        })
        .delete<{ id: string }>(routePrefix + "/p-id-:id", async (context) => {
            await deleteByPersonID(context.params.id as unknown as number)
            context.response.body = "200"
        })
    return router;
}

export {
    gradeRoutes,
}