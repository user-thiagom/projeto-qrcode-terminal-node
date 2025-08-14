import dotenv from 'dotenv'

dotenv.config()

async function handler() {
    let characters = []
    let password = ''

    const passwordLength = parseInt(process.env.PASSWORD_LENGTH)

    if (process.env.UPPERCASE_LETTERS === "true") characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    if (process.env.LOWERCASE_LETTERS === "true") characters.push(..."abcdefghijklmnopqrstuvwxyz")
    if (process.env.NUMBERS === "true") characters.push(..."0123456789")
    if (process.env.SPECIAL_CHARACTERS === "true") characters.push(..."!@#$%&*-_=+?")

    for (let index = 0; index < passwordLength; index++) {
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index]
    }

    return password
}

export default handler