import chalk from "chalk";
import generateRandomNumbers from './utils/generateRandomNumbers.js'

export default async function handle(err, {quantity, min, max}) {
    if(err){
        console.log(chalk.red.italic("Error on application"))
        return
    }

    const numeros = await generateRandomNumbers(quantity, min, max)
    let exibir = ``
    numeros.forEach(num => exibir += `| ${num} | `)
    console.log(chalk.greenBright.bgBlack(exibir))
}