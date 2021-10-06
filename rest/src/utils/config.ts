import { toml } from "../../deps.ts";


//const env = dotenv.config();
// Run from root of program
const CONFIG_PATH = "./config.toml";
const CONFIG = await Deno.readTextFile(CONFIG_PATH);
const CONTAINERIZED = Deno.env.get("CONTAINERIZED");

let config: any;

try {
    if(CONTAINERIZED=="1"){
        config = toml.parse(CONFIG).containerized;
        console.log("Rest running in containerized mode");
    }
    else{
        config = toml.parse(CONFIG).development;
        console.log("Rest running in development mode");
    }
    
} catch (e) {
    console.error("Parsing error on line " + e.line + ", column " + e.column +
        ": " + e.message);
}

const SITE_URI = `http://${config.target_uri}:${config.server.port}`

export {
    config, SITE_URI
}

