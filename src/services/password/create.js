import handler from "./handler.js";
import prompt from "prompt";
import promptSchemaPassword from "../../prompts-schema/schema-passwordGenerator.js";



async function createPassword() {
    prompt.get(promptSchemaPassword, handler)
    prompt.start()
    // const password = await handler()
    // console.log(chalk.green(`password: ${password}`))
}

export default createPassword