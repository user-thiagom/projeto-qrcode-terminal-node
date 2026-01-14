import prompt from 'prompt'
import promptSchemaMain from './prompts-schema/schema-main.js'
import createQrcode from './services/qr-code/create.js'
import createPassword from './services/password/create.js'
import createText from './services/text-gen/create.js'
import createCalculator from './services/calculator/create.js'
import dotenv from 'dotenv'
import createRandomNumbers from './services/random/create.js'

dotenv.config()

async function main() {
    prompt.get(promptSchemaMain, async (err, choice) => {
        if (choice.select == 1) await createQrcode()
        if (choice.select == 2) await createPassword()
        if (choice.select == 3) await createText()
        if (choice.select == 4) await createCalculator()
        if (choice.select == 5) await createRandomNumbers()
    })

    prompt.start()
}

main()