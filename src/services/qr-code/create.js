import prompt from "prompt"
import promptSchemaQrcode from "../../prompts-schema/schema-qrcode.js"
import handler from "./handdler.js"


async function createQrcode() {
    prompt.get(promptSchemaQrcode, handler)

    prompt.start()
}

export default createQrcode