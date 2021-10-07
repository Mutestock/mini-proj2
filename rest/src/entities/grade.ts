import { Link } from "./link.ts";
import { SITE_URI } from "../utils/config.ts";
import { classTransformer } from "../../deps.ts";

const BASE_URI = `${SITE_URI}/exam`

class NewExam {
    private _name: string;

    constructor(name: string, ) {
        this._name = name;
    }
}



class Exam {
    public id: number;
    public name: string;
    public created_at: string;
    public updated_at: string;

    // deno-lint-ignore camelcase
    constructor(id: number, name: string, created_at: string, updated_at: string) {
        this.id = id;
        this.name = name;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}



class ExamLinked {
    private id: number;
    private name: string;
    private created_at: string;
    private updated_at: string;
    private links: Link[];

    constructor(exam: Exam) {
        this.id = exam.id;
        this.name = exam.name;
        this.created_at = exam.created_at;
        this.updated_at = exam.updated_at;
        this.links = [
            new Link("self", `${BASE_URI}/${exam.id}`),
            new Link("all", `${BASE_URI}`)
        ]
    }

    get(){
        return this.name
    }

    set(name: string){
        this.name = name
    }

    static fromParsedObject(jsonStr: Object): ExamLinked {
        return new ExamLinked(classTransformer.plainToClass(Exam, jsonStr));
    }
}




// For response with relevant values
export {
    NewExam, ExamLinked, Exam
}


