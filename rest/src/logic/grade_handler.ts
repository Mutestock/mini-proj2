
import { NewExam, Exam, ExamLinked } from "../entities/exam.ts";
import { queryBodyGuard} from "./shared_behaviour.ts";
import { oak } from "../../deps.ts";
import { makeSqliteConnection } from "../connection/sqlite_connection.ts";



// Expected input = newExam
async function create(context: oak.RouterContext) {
    queryBodyGuard(context);
    const newExam = await context
        .request
        .body()
        .value as NewExam;
    await queryInsertObject(newExam, "exams");
}

// Expected input = id
async function read(id: string) {
    const rawQueryExam = await queryReadObject("exams", id);
    const examParsed = JSON.parse(JSON.stringify(rawQueryExam.rows[0]));
    return JSON.stringify(ExamLinked.fromParsedObject(examParsed));
}

// Expected input = id, newExam
async function update(context: oak.RouterContext<{ id: string }, Record<string, any>>) {
    queryBodyGuard(context);
    let id = "";
    if (context.params.id) {
        id = context.params.id
    }

    const updateExam = await context
        .request
        .body()
        .value as NewExam
    await queryUpdateObject(updateExam, "exams", id);
}

// Expected input = id
async function _delete(id: string) {
    await queryDeleteObject("exams", id);
}

// Expected input = None
async function readList() {
    const rawQueryExamList = await queryReadObjectList("exams")    
    const examListParsed = JSON.parse(JSON.stringify(rawQueryExamList.rows));
    
    const examList: ExamLinked[] = [];
    examListParsed.forEach(function (exam: Object) {
        examList.push(ExamLinked.fromParsedObject(exam));
    });

    return JSON.stringify(examList);
}

async function getTeachersByExamId(id: string){
    const query = `
        select t.first_name, t.last_name, t.phone_number, t.email from teachers t 
	        join exams_teachers gt on t.id = gt.teacher_id
	        join exams g on gt.exam_id = g.id
	        where g.id = ${id}
    `;
    const res = await runQuery(query);
    return JSON.parse(JSON.stringify(res.rows));
}


async function getStudentsByExamId(id: string){
    const query = `
        select s.first_name, s.last_name, s.phone_number, s.email from students s 
	        join exams_students gs on s.id = gs.student_id
	        join exams g on gs.exam_id = g.id
	        where g.id = ${id}
    `;
    const res = await runQuery(query);
    return JSON.parse(JSON.stringify(res.rows));
}

export {
    create, read, update, _delete, readList, getStudentsByExamId, getTeachersByExamId
}
