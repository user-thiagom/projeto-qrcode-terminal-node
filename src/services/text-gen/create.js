import promptTextGen from "../../prompts-schema/schema-textGen.js";
import prompt from "prompt";
import handle from "./handle.js";

async function createText() {
    prompt.get(promptTextGen, handle)
    prompt.start()
}

export default createText