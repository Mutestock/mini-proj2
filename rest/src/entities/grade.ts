import {Link} from "./link.ts";
import {SITE_URI} from "../utils/config.ts";
import { classTransformer } from "../../deps.ts";

const BASE_URI = `${SITE_URI}/grade`

class NewGrade {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }
}

class Grade {
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

class GradeLinked{
    private id: number;
    private name: string;
    private created_at: string;
    private updated_at: string;
    private links: Link[];

    constructor(grade: Grade) {
        this.id = grade.id;
        this.name = grade.name;
        this.created_at = grade.created_at;
        this.updated_at = grade.updated_at;
        this.links = [
            new Link("self", `${BASE_URI}/${grade.id}`),
            new Link("all", `${BASE_URI}`)
        ]
    }

    static fromParsedObject(jsonStr: Object): GradeLinked{
        return new GradeLinked(classTransformer.plainToClass(Grade, jsonStr));
    }

}




// For response with relevant values
export {
    NewGrade, GradeLinked, Grade
}


