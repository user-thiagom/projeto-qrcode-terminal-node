import chalk from "chalk"

const promptSchemaMain = [
    {
        name:"select",
        description: chalk.yellow.bold(
            `Escolha a ferramenta: \n 1 - Gerador de QR Code\n 2 - Gerador de Senhas\n 3 - Gerador de Texto\n 4 - Calculadora Básica\n 5 - Gerador de Números Aleatórios\n opção: `
        ),
        pattern: /^[1-8]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 8"),
        required: true
    }
]

export default promptSchemaMain