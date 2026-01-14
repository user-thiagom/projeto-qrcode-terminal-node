import promptRandomNumbers from "../../prompts-schema/schema-randomNumbers.js";
import prompt from "prompt";
import handle from "./handle.js";

async function createRandomNumbers() {
    prompt.get(promptRandomNumbers, handle)
    prompt.start()
}

export default createRandomNumbers