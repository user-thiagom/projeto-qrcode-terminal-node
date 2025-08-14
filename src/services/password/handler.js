import permittedCharacters from './utils/permitedCharacters.js'

async function handler() {
    let characters = await permittedCharacters()
    let password = ''

    const passwordLength = parseInt(process.env.PASSWORD_LENGTH)

    for (let index = 0; index < passwordLength; index++) {
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index]
    }

    return password
}

export default handler