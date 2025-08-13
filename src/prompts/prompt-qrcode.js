import chalk from "chalk"

const promptQrcode = [
    {
        name:"link",
        description: chalk.yellow("Digite o link para gerar o QR CODE"),
    },
    {
        name:"type",
        description: chalk.yellow("Escolha entro o tipo (1- NORMAL ou 2- TERMINAL)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true
    }
]

export default promptQrcode