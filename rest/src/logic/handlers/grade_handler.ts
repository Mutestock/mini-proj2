
import { NewGrade, Grade, GradeLinked } from "../../entities/grade.ts";
import { queryBodyGuard } from "./shared_behaviour.ts";
import { oak } from "../../../deps.ts";
import * as queries from "../queries/grade_queries.ts";


async function create(context: oak.RouterContext) {
    queryBodyGuard(context);
    const newGrade = await context
        .request
        .body()
        .value as NewGrade;
    queries.queryCreate(newGrade);
}

async function updateByExamID(context: oak.RouterContext<{ id: string }, Record<string, any>>) {
    queryBodyGuard(context);
    let id = 0;
    if (context.params.id) {
        id = context.params.id as unknown as number
    }

    const updateGrade = await context
        .request
        .body()
        .value as NewGrade
    queries.queryUpdateByExamID(id, updateGrade);
}

async function updateByPersonID(context: oak.RouterContext<{ id: string }, Record<string, any>>) {
    queryBodyGuard(context);
    let id = 0;
    if (context.params.id) {
        id = context.params.id as unknown as number
    }

    const updateGrade = await context
        .request
        .body()
        .value as NewGrade
    queries.queryUpdateByPersonID(id, updateGrade);
}


function deleteByPersonID(id: number) {
    queries.queryDeleteByPersonID(id);
}

function deleteByExamID(id: number) {
    queries.queryDeleteByExamID(id);
}

function readListByPersonID(id: number): string {
    //const gradeList: GradeLinked[] = [];
    //queries.queryReadListByPersonID(id).forEach(function (grade: Grade) {
    //    gradeList.push(GradeLinked.fromParsedObject(grade));
    //});
    //return JSON.stringify(gradeList);

    const gradeList: Grade[] = [];
    queries.queryReadListByPersonID(id).forEach(function (grade: Grade) {
        gradeList.push(grade);
    });
    return JSON.stringify(gradeList);
}

function readListByExamID(id: number): string {
    const gradeList: GradeLinked[] = [];
    queries.queryReadListByExamID(id).forEach(function (grade: Grade) {
        gradeList.push(GradeLinked.fromParsedObject(grade));
    });
    return JSON.stringify(gradeList);
}

function readList(): string {
    const gradeList: GradeLinked[] = [];
    queries.queryReadList().forEach(function (grade: Grade) {
        gradeList.push(GradeLinked.fromParsedObject(grade));
    });
    return JSON.stringify(gradeList);
}

function readListWhoPassed(): string {
    const gradeList: Grade[] = [];
    queries.queryReadListWhoPassed().forEach(function (grade: Grade) {
        gradeList.push(grade);
    });
    return JSON.stringify(gradeList);
}

function readListWhoFailed(): string {
    const gradeList: GradeLinked[] = [];
    queries.queryReadListWhoFailed().forEach(function (grade: Grade) {
        gradeList.push(GradeLinked.fromParsedObject(grade));
    });
    return JSON.stringify(gradeList);
}


export {
    create,
    readList, readListByExamID, readListByPersonID, readListWhoFailed, readListWhoPassed,
    deleteByExamID, deleteByPersonID,
    updateByExamID, updateByPersonID
}
