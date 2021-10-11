import {oak} from "../../deps.ts"
import {examRoutes} from "./exam_routes.ts";
import {basicRoutes} from "./util_routes.ts";
import {homeRoutes} from "./home_routes.ts";
import {gradeRoutes} from "./grade_routes.ts";



// Contains configurations for all routes

const router = new oak.Router();
examRoutes(router);
basicRoutes(router);
homeRoutes(router);
gradeRoutes(router);

export {
    router
}