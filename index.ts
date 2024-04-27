#! /usr/bin/env node
import inquirer from "inquirer"


const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count words: "
    }
])
const words = answers.Sentence.trim().split(" ")
console.log(`Your sentence has ${words.length} words`)