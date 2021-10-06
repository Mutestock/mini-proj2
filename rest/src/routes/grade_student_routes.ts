import { oak } from "../../deps.ts";
import { getStudentsByGradeId } from "../logic/grade_handler.ts"

const routePrefix = "/grade-student"

function gradeStudentRoutes(router: oak.Router): oak.Router {
    router
        .get<{ student_id: string }>(routePrefix + "/:student_id", async (context) => {
            context.response.body = await getStudentsByGradeId(context.params.student_id);
        })
    return router;
}

export {
    gradeStudentRoutes,
}