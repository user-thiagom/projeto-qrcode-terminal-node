import chalk from "chalk";

export default async function generate(numbersQuantity, minValue, maxValue) {
    let min = Number(minValue)
    let max = Number(maxValue)

    if(numbersQuantity < 1){
        console.log(chalk.red.italic("Error! number quantity must be at least 1"))
        return
    }

    if (min > max) {
        max = Number(minValue)
        min = Number(maxValue)
    }

    const numbers = []

    for(let i = 1; i <= Number(numbersQuantity); i++){
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numbers.push(randomNumber)
    }

    return numbers
}