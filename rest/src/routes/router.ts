import {oak} from "../../deps.ts"
import {gradeRoutes} from "./grade_routes.ts";
import {basicRoutes} from "./util_routes.ts";
import {homeRoutes} from "./home_routes.ts";
import {gradeStudentRoutes} from "./grade_student_routes.ts";
import {gradeTeacherRoutes} from "./grade_teacher_routes.ts";


// Contains configurations for all routes

const router = new oak.Router();
gradeRoutes(router);
basicRoutes(router);
homeRoutes(router);
gradeStudentRoutes(router)
gradeTeacherRoutes(router)

export {
    router
}