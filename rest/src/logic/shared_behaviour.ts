
import { oak } from "../../deps.ts"


function queryBodyGuard(context: oak.RouterContext | oak.RouterContext<{ id: string }, Record<string, any>>) {
    if (!context.request.hasBody) {
        context.throw(oak.Status.BadRequest, "Bad Request");
    }
    if (context.request.body().type !== "json") {
        context.throw(oak.Status.BadRequest, "Bad Request");
    }
}


export {
    queryBodyGuard
}