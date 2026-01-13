import chalk from "chalk"

const promptSchemaPassword = [
    {
        name:"upper",
        description: chalk.greenBright("Deseja letras maiúscula?\n 1 - Sim\n 2 - Não"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true
    },
    {
        name:"lower",
        description: chalk.greenBright("Deseja letras minúscula?\n 1 - Sim\n 2 - Não"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true
    },
    {
        name:"numbers",
        description: chalk.greenBright("Deseja números?\n 1 - Sim\n 2 - Não"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true
    },
    {
        name:"special",
        description: chalk.greenBright("Deseja caracteres especiais?\n 1 - Sim\n 2 - Não"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true
    },
    {
        name:"length",
        description: chalk.greenBright("Digite o tamanho da senha (tamanho mínimo: 5): "),
        pattern: /^(5|[6-9]|[1-9]\d+)$/,
        message: chalk.red.italic("Digite um tamanho válido"),
        required: true
    }
]

export default promptSchemaPassword