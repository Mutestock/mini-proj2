import { Link } from "./link.ts";
import { SITE_URI } from "../utils/config.ts";
import { classTransformer } from "../../deps.ts";

// https://deno.land/x/sqlite@v3.1.1
import { makeSqliteConnection} from "../connection/sqlite_connection.ts"


const BASE_URI = `${SITE_URI}/grade`

class NewGrade {
    private _person_id: number;
    private _exam_id: number;
    private _symbol: string;


    constructor(person_id: number, exam_id: number, symbol: string) {
        this._person_id=person_id;
        this._exam_id=exam_id;
        this._symbol=symbol;
    }

    create(){
        const conn = makeSqliteConnection();
        const insertQuery = conn.prepareQuery(
            "INSERT INTO grade (person_id, exam_id, symbol) VALUES (:person_id, :exam_id :symbol)",
        );
        insertQuery.execute({
            person_id: this._person_id,
            exam_id: this._exam_id,
            symbol: this._symbol
        });
    }
    personID(){
        return this._person_id;
    }
    examID(){
        return this._exam_id;
    }
    symbol(){
        return this._symbol;
    }

}

class Grade {
    public person_id: number;
    public exam_id: number;
    public symbol: string;

    // deno-lint-ignore camelcase
    constructor(person_id: number, exam_id: number, symbol: string) {
        this.person_id=person_id;
        this.exam_id=exam_id;
        this.symbol=symbol;
    }


    static read(id: number): Grade{
        const conn = makeSqliteConnection();
        const readQuery = conn.prepareQuery<[number, number, string]>(
            "SELECT * FROM grade WHERE ID = :id"
        );
        const gradeValues = readQuery.one({id:id});
        return new Grade(gradeValues[0], gradeValues[1], gradeValues[2]);
    }

    static update(id: number, grade: NewGrade){
        const conn = makeSqliteConnection();
        const updateQuery = conn.prepareQuery(
            "UPDATE grade SET person_id = :person_id, exam_id = :exam_id, symbol = :symbol WHERE id = :id"
        );
        return updateQuery.execute({
            person_id: grade.personID(),
            exam_id: grade.examID(),
            symbol: grade.symbol(),
            id:id
        });
    }

    static readListByPersonID(person_id: number){
        const conn = makeSqliteConnection();
        const readQuery = conn.prepareQuery<[number, number, string]>(
            "SELECT * FROM grade WHERE ID = :id"
        );
        const gradeValues = readQuery.one({id:id});
        return new Grade(gradeValues[0], gradeValues[1], gradeValues[2]);
    }

    static delete(id: number){
        const conn = makeSqliteConnection();
        const deleteQuery = conn.prepareQuery(
            "DELETE FROM grade WHERE ID = :id"
        )
        deleteQuery.execute({id:id});
    }

    static readList(): Grade[]{
        const conn = makeSqliteConnection();
        const readListQuery = conn.prepareQuery<[number,number, string]>(
            "SELECT * FROM grade"
        );

        const gradeList: Grade[] = [];
        // deno-lint-ignore camelcase
        for (const[person_id, exam_id, symbol] of readListQuery.iter()) {
            gradeList.push(new Grade(person_id, exam_id, symbol))
        };
        return gradeList
    }
}


class GradeLinked {
    private person_id: number;
    private exam_id: number;
    private symbol: string;
    private links: Link[];

    constructor(grade: Grade) {
        this.person_id = grade.person_id;
        this.exam_id = grade.exam_id;
        this.symbol = grade.symbol;
        this.links = [
            new Link("Connected Person", `${BASE_URI}/${grade.person_id}`),
            new Link("Connected Exam", `${BASE_URI}/${grade.exam_id}`),
            new Link("all", `${BASE_URI}`)
        ]
    }

    static fromParsedObject(jsonStr: Object): GradeLinked {
        return new GradeLinked(classTransformer.plainToClass(Grade, jsonStr));
    }
}




// For response with relevant values
export {
    NewGrade, GradeLinked, Grade
}


