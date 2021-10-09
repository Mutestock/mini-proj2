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
            "INSERT INTO exam (name, examination_date) VALUES (:name, :examination_date)",
        );
        insertQuery.execute({
            name: this._name,
            examination_date: this._examinationDate
        });
    }
    name(){
        return this._name;
    }
    examinationDate(): Date{
        return this._examinationDate;
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
        const readQuery = conn.prepareQuery<[number, string, Date, string, string]>(
            "SELECT * FROM exam WHERE ID = :id"
        );
        const examValues = readQuery.one({id:id});
        return new Exam(examValues[0], examValues[1], examValues[2], examValues[3], examValues[4]);
    }

    static update(id: number, exam: NewExam){
        const conn = makeSqliteConnection();
        const updateQuery = conn.prepareQuery(
            "UPDATE exam SET examination_date = :examination_date, name = :name WHERE id = :id"
        )
        return updateQuery.execute({
            examination_date: exam.examinationDate(),
            name: exam.name(),
            id: id,
        })
    }

    static delete(id: number){
        const conn = makeSqliteConnection();
        const deleteQuery = conn.prepareQuery(
            "DELETE FROM exam WHERE ID = :id"
        )
        deleteQuery.execute({id:id});
    }

    static readList(): Exam[]{
        const conn = makeSqliteConnection();
        const readListQuery = conn.prepareQuery<[number, string, Date, string, string]>(
            "SELECT * FROM exam"
        );

        const examList: Exam[] = [];
        // deno-lint-ignore camelcase
        for (const[id, name, examination_date, created_at, updated_at] of readListQuery.iter()) {
            examList.push(new Exam(id, name, examination_date, created_at, updated_at))
        };
        return examList
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


