import { Link } from "./link.ts";
import { SITE_URI } from "../utils/config.ts";
import { classTransformer } from "../../deps.ts";



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

    personID(): number{
        return this._person_id;
    }
    examID(): number{
        return this._exam_id;
    }
    symbol(): string{
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


