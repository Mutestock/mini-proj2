import { toml } from "../../deps.ts";


//const env = dotenv.config();
// Run from root of program
const CONFIG_PATH = "./config.toml";
const CONFIG = await Deno.readTextFile(CONFIG_PATH);

let config: any;

try {
    config = toml.parse(CONFIG);
    
} catch (e) {
    console.error("Parsing error on line " + e.line + ", column " + e.column +
        ": " + e.message);
}

const SITE_URI = `http://${config.target_uri}:${config.server.port}`

export {
    config, SITE_URI
}

