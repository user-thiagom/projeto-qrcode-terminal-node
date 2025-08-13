import prompt from "prompt"
import promptQrcode from "../../prompts/prompt-qrcode.js"
import handler from "./handdler.js"


async function createQrcode() {
    prompt.get(promptQrcode, handler)

    prompt.start()
}

export default createQrcode