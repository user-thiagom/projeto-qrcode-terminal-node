import chalk from 'chalk'
import prompt from 'prompt'
import { promptCalculatorNumbers } from '../../prompts-schema/schema-calculator.js'

async function handle(err, operation) {
    if (err) {
        console.log(chalk.white.bgRed("Error on aplication"))
        return
    }

    prompt.get(promptCalculatorNumbers, async (err, numbers) => {
        const num1 = Number(numbers.num1)
        const num2 = Number(numbers.num2)
        let result = 0
        if (operation.op == 1) result = num1 + num2
        if (operation.op == 2) result = num1 - num2
        if (operation.op == 3) result = num1 * num2
        if (operation.op == 4) result = num1 / num2
        console.log(chalk.greenBright.bgBlack(result))
    })
}

export default handle