import { NewGrade, Grade } from "../../entities/grade.ts";

// https://deno.land/x/sqlite@v3.1.1
import { makeSqliteConnection } from "../../connection/sqlite_connection.ts"


function queryCreate(newGrade: NewGrade) {
    const conn = makeSqliteConnection();
    const insertQuery = conn.prepareQuery(
        "INSERT INTO grade (person_id, exam_id, symbol) VALUES (:person_id, :exam_id :symbol)",
    );
    insertQuery.execute({
        person_id: newGrade.person_id,
        exam_id: newGrade.exam_id,
        symbol: newGrade.symbol
    });
}

function queryUpdateByExamID(examID: number, grade: NewGrade) {
    const conn = makeSqliteConnection();
    const updateQuery = conn.prepareQuery(
        "UPDATE grade SET grade_id = :grade_id, symbol = :symbol WHERE exam_id = :exam_id"
    );
    return updateQuery.execute({
        grade_id: grade.person_id,
        symbol: grade.symbol,
        exam_id: examID
    });
}

function queryUpdateByPersonID(personID: number, grade: NewGrade) {
    const conn = makeSqliteConnection();
    const updateQuery = conn.prepareQuery(
        "UPDATE grade SET exam_id = :exam_id, symbol = :symbol WHERE person_id = :person_id"
    );
    return updateQuery.execute({
        person_id: personID,
        exam_id: grade.exam_id,
        symbol: grade.symbol,
    });
}

function queryReadListWhoFailed() {
    const conn = makeSqliteConnection();
    const query = conn.prepareQuery<[number, number, string]>(
        `SELECT * FROM grade 
        WHERE symbol = 'F'
        `
    );
    const gradeList: Grade[] = [];
    // deno-lint-ignore camelcase
    for (const [person_id, exam_id, symbol] of query.iter()) {
        gradeList.push(new Grade(person_id, exam_id, symbol))
    };
    return gradeList
}


function queryReadListWhoPassed() {
    const conn = makeSqliteConnection();
    const query = conn.prepareQuery<[number, number, string]>(
        `SELECT * FROM grade 
        WHERE symbol IS NOT 'F'
        `
    );
    const gradeList: Grade[] = [];
    // deno-lint-ignore camelcase
    for (const [person_id, exam_id, symbol] of query.iter()) {
        gradeList.push(new Grade(person_id, exam_id, symbol))
    };
    return gradeList
}

function queryDeleteByPersonID(person_id: number) {
    const conn = makeSqliteConnection();
    const deleteQuery = conn.prepareQuery(
        "DELETE FROM grade WHERE person_id = :person_id"
    )
    deleteQuery.execute({ person_id: person_id });
}

function queryDeleteByExamID(exam_id: number) {
    const conn = makeSqliteConnection();
    const deleteQuery = conn.prepareQuery(
        "DELETE FROM grade WHERE exam_id = :exam_id"
    )
    deleteQuery.execute({ exam_id: exam_id });
}

function queryReadListByPersonID(personID: number): Grade[] {
    const conn = makeSqliteConnection();
    const readListQuery = conn.prepareQuery<[number, number, string]>(
        "SELECT * FROM grade where person_id = :person_id"
    );

    const gradeList: Grade[] = [];
    // deno-lint-ignore camelcase
    for (const [person_id, exam_id, symbol] of readListQuery.iter({ "person_id": personID })) {
        gradeList.push(new Grade(person_id, exam_id, symbol))
    };
    return gradeList
}

function queryReadListByExamID(examId: number): Grade[] {
    const conn = makeSqliteConnection();
    const readListQuery = conn.prepareQuery<[number, number, string]>(
        "SELECT * FROM grade where exam_id = :exam_id"
    );

    const gradeList: Grade[] = [];
    // deno-lint-ignore camelcase
    for (const [person_id, exam_id, symbol] of readListQuery.iter({ "eaxm_id": examId })) {
        gradeList.push(new Grade(person_id, exam_id, symbol))
    };
    return gradeList
}

function queryReadList(): Grade[] {
    const conn = makeSqliteConnection();
    const readListQuery = conn.prepareQuery<[number, number, string]>(
        "SELECT * FROM grade"
    );

    const gradeList: Grade[] = [];
    // deno-lint-ignore camelcase
    for (const [person_id, exam_id, symbol] of readListQuery.iter()) {
        gradeList.push(new Grade(person_id, exam_id, symbol))
    };
    return gradeList
}

export {
    queryCreate,
    queryReadListByPersonID, queryReadList, queryReadListByExamID, queryReadListWhoPassed, queryReadListWhoFailed,
    queryUpdateByPersonID, queryUpdateByExamID,
    queryDeleteByPersonID, queryDeleteByExamID,
}