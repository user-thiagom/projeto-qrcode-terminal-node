import chalk from "chalk"

const promptCalculator = [
    {
        name:"op",
        description: chalk.greenBright("Qual operação deseja realizar?\n 1 - Soma\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão\n"),
        pattern: /^[1-4]+$/,
        message: chalk.red.italic("Digite uma operação válida"),
        required: true
    }
]

const promptCalculatorNumbers = [
    {
        name:"num1",
        description: chalk.greenBright("Digite o primeiro número: \n"),
        pattern: /^-?\d+(\.\d+)?$/,
        message: chalk.red.italic("Digite um número válido"),
        required: true
    },
    {
        name:"num2",
        description: chalk.greenBright("Digite o segundo número: \n"),
        pattern: /^-?\d+(\.\d+)?$/,
        message: chalk.red.italic("Digite um número válido"),
        required: true
    }
]



export{
    promptCalculator,
    promptCalculatorNumbers
} 