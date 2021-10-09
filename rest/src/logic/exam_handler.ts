
import { NewExam, Exam, ExamLinked } from "../entities/exam.ts";
import { queryBodyGuard } from "./shared_behaviour.ts";
import { oak } from "../../deps.ts";
import { makeSqliteConnection } from "../connection/sqlite_connection.ts";



// Expected input = newExam
async function create(context: oak.RouterContext) {
    queryBodyGuard(context);
    const newExam = await context
        .request
        .body()
        .value as NewExam;
    newExam.create();
}

// Expected input = id
function read(id: string) {
    const exam = Exam.read(id as unknown as number);
    return JSON.stringify(new ExamLinked(exam));
}

// Expected input = id, newExam
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
    Exam.update(id, updateExam);
}

// Expected input = id
function _delete(id: string) {
    Exam.delete(id as unknown as number);
}

// Expected input = None
function readList() {
    const examList: ExamLinked[] = [];
    Exam.readList().forEach(function (exam: Exam) {
        examList.push(ExamLinked.fromParsedObject(exam));
    });
    return JSON.stringify(examList);
}

export {
    create, read, update, _delete, readList
}
