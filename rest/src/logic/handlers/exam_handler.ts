
import { NewExam, Exam, ExamLinked } from "../../entities/exam.ts";
import { queryBodyGuard } from "./shared_behaviour.ts";
import { oak } from "../../../deps.ts";
import * as queries from "../queries/exam_queries.ts"




async function create(context: oak.RouterContext) {
    queryBodyGuard(context);
    const newExam = await context
        .request
        .body()
        .value as NewExam;
    queries.queryCreate(newExam);
}


function read(id: string) {
    const exam = queries.queryRead(id as unknown as number);
    return JSON.stringify(new ExamLinked(exam));
}


async function update(context: oak.RouterContext<{ id: string }, Record<string, any>>) {
    queryBodyGuard(context);
    let id = 0;
    if (context.params.id) {
        id = context.params.id as unknown as number
    }

    const updateExam = await context
        .request
        .body()
        .value as NewExam
    queries.queryUpdate(id, updateExam);
}


function _delete(id: string) {
    queries.queryDelete(id as unknown as number);
}


function readList() {
    const examList: ExamLinked[] = [];
    queries.queryReadList().forEach(function (exam: Exam) {
        examList.push(ExamLinked.fromParsedObject(exam));
    });
    return JSON.stringify(examList);
}

export {
    create, read, update, _delete, readList
}
