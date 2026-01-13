import chalk from "chalk"

const promptTextGen = [
    {
        name:"words",
        description: chalk.greenBright("Digite a quantidade de palavras no parágrafo: "),
        pattern: /^[1-9]\d*$/,
        message: chalk.red.italic("Digite uma quantidade de de palavras válidas!"),
        required: true
    },
]

export default promptTextGen