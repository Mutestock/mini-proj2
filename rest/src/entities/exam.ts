import { Link } from "./link.ts";
import { SITE_URI } from "../utils/config.ts";
import { classTransformer } from "../../deps.ts";

// https://deno.land/x/sqlite@v3.1.1
import { makeSqliteConnection} from "../connection/sqlite_connection.ts"


const BASE_URI = `${SITE_URI}/exam`

class NewExam {
    private _name: string;
    private _examinationDate: Date;

    constructor(name: string, examinationDate: Date) {
        this._name = name;
        this._examinationDate = examinationDate;
    }

    create(){
        const conn = makeSqliteConnection();
        const insertQuery = conn.prepareQuery(
            "INSERT INTO exams (name, examination_date) VALUES (:name, :examination_date)",
        );
        insertQuery.execute({
            name: this._name,
            examination_date: this._examinationDate
        });
    }

}

class Exam {
    public id: number;
    public name: string;
    public examimation_date: Date;
    public created_at: string;
    public updated_at: string;

    // deno-lint-ignore camelcase
    constructor(id: number, name: string, examination_date: Date, created_at: string, updated_at: string) {
        this.id = id;
        this.name = name;
        this.examimation_date = examination_date
        this.created_at = created_at;
        this.updated_at = updated_at;
    }


    static read(id: number): Exam{
        const conn = makeSqliteConnection();
        const readQuery = conn.prepareQuery(
            "SELECT * FROM exams WHERE ID = :id"
        );
        return readQuery.one({id:id});
    }

    static update(id: number, exam: Exam){
        const conn = makeSqliteConnection();
        const updateQuery = conn.prepareQuery(
            "UPDATE SET "
        )
    }

    static delete(id: number){
        const conn = makeSqliteConnection();
        const deleteQuery = conn.prepareQuery(
            "DELETE FROM exams WHERE ID = :id"
        )
        deleteQuery.execute({id:id});
    }

    static readList(): Exam[]{
        const conn = makeSqliteConnection();
        const readListQuery = conn.prepareQuery(
            "SELECT * FROM exams"
        );
        return readListQuery.execute().

    }


}


class ExamLinked {
    private id: number;
    private name: string;
    private examination_date: Date;
    private created_at: string;
    private updated_at: string;
    private links: Link[];

    constructor(exam: Exam) {
        this.id = exam.id;
        this.name = exam.name;
        this.examination_date = exam.examimation_date;
        this.created_at = exam.created_at;
        this.updated_at = exam.updated_at;
        this.links = [
            new Link("self", `${BASE_URI}/${exam.id}`),
            new Link("all", `${BASE_URI}`)
        ]
    }

    static fromParsedObject(jsonStr: Object): ExamLinked {
        return new ExamLinked(classTransformer.plainToClass(Exam, jsonStr));
    }
}




// For response with relevant values
export {
    NewExam, ExamLinked, Exam
}


