import { Link } from "./link.ts";
import { SITE_URI } from "../utils/config.ts";
import { classTransformer } from "../../deps.ts";

// https://deno.land/x/sqlite@v3.1.1
import { makeSqliteConnection } from "../connection/sqlite_connection.ts"


const BASE_URI = `${SITE_URI}/exam`

class NewExam {
    public name: string;
    public examination_date: Date;

    constructor(name: string, examination_date: Date) {
        this.name = name;
        this.examination_date = examination_date;
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

export {
    NewExam, ExamLinked, Exam
}


