import { gherkin } from "../../deps.ts";
import { config } from "../../src/utils/config.ts";

const options = {
    includeSources: true,
    includeGherkinDocument: true,
    includePickles: true,
}

const stream = gherkin.fromPaths([config.misc.gherkin_file_paths])
