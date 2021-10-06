import {oak} from "../../deps.ts";


const routePrefix = "/home"

function homeRoutes(router: oak.Router): oak.Router{
    router
        .get(routePrefix, (context) => {
            context.response.body = "Ok"
        })
    return router;
}


export {
    homeRoutes,
}