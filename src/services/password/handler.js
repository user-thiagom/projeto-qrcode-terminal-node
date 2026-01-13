import chalk from 'chalk'
import permittedCharacters from './utils/permitedCharacters.js'

async function handler(err, result) {
    if(err){
        console.log(chalk.white.bgRed("Error on aplication"))
        return
    }

    let characters = await permittedCharacters(result)
    let password = ''

    const passwordLength = parseInt(result.length)

    for (let index = 0; index < passwordLength; index++) {
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index]
    }

    console.log(chalk.blue.bgBlack(password))
}

export default handler