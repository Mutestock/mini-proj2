import { config } from "../utils/config.ts";
import { sqlite } from "../../deps.ts";

// https://deno.land/x/postgres@v0.12.0

export function makeSqliteConnection(){
    return new sqlite.DB(config.database.db+".db")
}
