
import { NewGrade, Grade, GradeLinked } from "../entities/grade.ts";
import { queryInsertObject, queryBodyGuard, queryReadObject, queryDeleteObject, queryUpdateObject, queryReadObjectList } from "./shared_behaviour.ts";
import { oak } from "../../deps.ts";
import { runQuery } from "../connection/pg_connection.ts";



// Expected input = newGrade
async function create(context: oak.RouterContext) {
    queryBodyGuard(context);
    const newGrade = await context
        .request
        .body()
        .value as NewGrade;
    await queryInsertObject(newGrade, "grades");
}

// Expected input = id
async function read(id: string) {
    const rawQueryGrade = await queryReadObject("grades", id);
    const gradeParsed = JSON.parse(JSON.stringify(rawQueryGrade.rows[0]));
    return JSON.stringify(GradeLinked.fromParsedObject(gradeParsed));
}

// Expected input = id, newGrade
async function update(context: oak.RouterContext<{ id: string }, Record<string, any>>) {
    queryBodyGuard(context);
    let id = "";
    if (context.params.id) {
        id = context.params.id
    }

    const updateGrade = await context
        .request
        .body()
        .value as NewGrade
    await queryUpdateObject(updateGrade, "grades", id);
}

// Expected input = id
async function _delete(id: string) {
    await queryDeleteObject("grades", id);
}

// Expected input = None
async function readList() {
    const rawQueryGradeList = await queryReadObjectList("grades")    
    const gradeListParsed = JSON.parse(JSON.stringify(rawQueryGradeList.rows));
    
    const gradeList: GradeLinked[] = [];
    gradeListParsed.forEach(function (grade: Object) {
        gradeList.push(GradeLinked.fromParsedObject(grade));
    });

    return JSON.stringify(gradeList);
}

async function getTeachersByGradeId(id: string){
    const query = `
        select t.first_name, t.last_name, t.phone_number, t.email from teachers t 
	        join grades_teachers gt on t.id = gt.teacher_id
	        join grades g on gt.grade_id = g.id
	        where g.id = ${id}
    `;
    const res = await runQuery(query);
    return JSON.parse(JSON.stringify(res.rows));
}


async function getStudentsByGradeId(id: string){
    const query = `
        select s.first_name, s.last_name, s.phone_number, s.email from students s 
	        join grades_students gs on s.id = gs.student_id
	        join grades g on gs.grade_id = g.id
	        where g.id = ${id}
    `;
    const res = await runQuery(query);
    return JSON.parse(JSON.stringify(res.rows));
}

export {
    create, read, update, _delete, readList, getStudentsByGradeId, getTeachersByGradeId
}
