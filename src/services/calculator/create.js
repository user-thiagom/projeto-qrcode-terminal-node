import {promptCalculator} from "../../prompts-schema/schema-calculator.js";
import prompt from "prompt";
import handle from "./handle.js";

async function createText() {
    prompt.get(promptCalculator, handle)
    prompt.start()
}

export default createText