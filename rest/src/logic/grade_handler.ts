
import { NewGrade, Grade, GradeLinked } from "../entities/grade.ts";
import { queryBodyGuard } from "./shared_behaviour.ts";
import { oak } from "../../deps.ts";
import { makeSqliteConnection } from "../connection/sqlite_connection.ts";



// Expected input = newGrade
async function create(context: oak.RouterContext) {
    queryBodyGuard(context);
    const newGrade = await context
        .request
        .body()
        .value as NewGrade;
    newGrade.create();
}

// Expected input = id
function read(id: string) {
    const grade = Grade.read(id as unknown as number);
    return JSON.stringify(new GradeLinked(grade));
}

// Expected input = id, newGrade
async function update(context: oak.RouterContext<{ id: string }, Record<string, any>>) {
    queryBodyGuard(context);
    let id = 0;
    if (context.params.id) {
        id = context.params.id as unknown as number
    }

    const updateGrade = await context
        .request
        .body()
        .value as NewGrade
    Grade.update(id, updateGrade);
}

// Expected input = id
function _delete(id: string) {
    Grade.delete(id as unknown as number);
}

// Expected input = None
function readList() {
    const gradeList: GradeLinked[] = [];
    Grade.readList().forEach(function (grade: Grade) {
        gradeList.push(GradeLinked.fromParsedObject(grade));
    });
    return JSON.stringify(gradeList);
}

export {
    create, read, update, _delete, readList
}
