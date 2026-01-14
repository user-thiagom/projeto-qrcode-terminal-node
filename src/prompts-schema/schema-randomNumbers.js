import chalk from "chalk"

const promptSchemaRandomNumbers = [
    {
        name:"quantity",
        description: chalk.green("Quantos números aleatórios deseja gerar?\n"),
        pattern: /^[1-9]\d*$/,
        message: chalk.red.italic("Digite um número válido!"),
        required: true
    },
    {
        name:"min",
        description: chalk.green("Digite o valor mínimo do intervalo de números: \n"),
        pattern: /^-?\d+$/,
        message: chalk.red.italic("Digite um número válido"),
        required: true
    },
    {
        name:"max",
        description: chalk.green("Digite o valor máximo do intervalo de números: \n"),
        pattern: /^-?\d+$/,
        message: chalk.red.italic("Digite um número válido"),
        required: true
    }
]

export default promptSchemaRandomNumbers