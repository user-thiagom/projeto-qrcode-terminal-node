import chalk from "chalk"

const promptSchemaQrcode = [
    {
        name:"link",
        description: chalk.green("Digite o link para gerar o QR CODE"),
    },
    {
        name:"type",
        description: chalk.green("Escolha entro o tipo (1 - GRANDE ou 2 - PEQUENO)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true
    }
]

export default promptSchemaQrcode