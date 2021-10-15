import { NewExam, Exam } from "../../entities/exam.ts";

// https://deno.land/x/sqlite@v3.1.1
import { makeSqliteConnection } from "../../connection/sqlite_connection.ts"

function queryCreate(newExam: NewExam){
    const conn = makeSqliteConnection();
    const insertQuery = conn.prepareQuery(
        "INSERT INTO exam (name, examination_date) VALUES (:name, :examination_date)",
    );
    
    insertQuery.execute({
        name: newExam.name,
        examination_date: newExam.examination_date
    });
}


function queryRead(id: number): Exam {
    const conn = makeSqliteConnection();
    const readQuery = conn.prepareQuery<[number, string, Date, string, string]>(
        "SELECT * FROM exam WHERE ID = :id"
    );
    const examValues = readQuery.one({ id: id });
    return new Exam(examValues[0], examValues[1], examValues[2], examValues[3], examValues[4]);
}

function queryUpdate(id: number, newExam: NewExam) {
    const conn = makeSqliteConnection();
    const updateQuery = conn.prepareQuery(
        "UPDATE exam SET examination_date = :examination_date, name = :name WHERE id = :id"
    )
    return updateQuery.execute({
        examination_date: newExam.examination_date,
        name: newExam.name,
        id: id,
    })
}

function queryDelete (id: number) {
    const conn = makeSqliteConnection();
    const deleteQuery = conn.prepareQuery(
        "DELETE FROM exam WHERE ID = :id"
    )
    deleteQuery.execute({ id: id });
}

function queryReadList(): Exam[] {
    const conn = makeSqliteConnection();
    const readListQuery = conn.prepareQuery<[number, string, Date, string, string]>(
        "SELECT * FROM exam"
    );

    const examList: Exam[] = [];
    // deno-lint-ignore camelcase
    for (const [id, name, examination_date, created_at, updated_at] of readListQuery.iter()) {
        examList.push(new Exam(id, name, examination_date, created_at, updated_at))
    };
    return examList
}

export {
    queryCreate, queryRead, queryUpdate, queryDelete, queryReadList
}