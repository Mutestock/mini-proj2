import { oak } from "../../deps.ts";
import { getTeachersByGradeId } from "../logic/grade_handler.ts"

const routePrefix = "/grade-teacher"

function gradeTeacherRoutes(router: oak.Router): oak.Router {
    router
        .get<{ student_id: string }>(routePrefix + "/:student_id", async (context) => {
            context.response.body = await getTeachersByGradeId(context.params.student_id);
        })
    return router;
}

export {
    gradeTeacherRoutes,
}