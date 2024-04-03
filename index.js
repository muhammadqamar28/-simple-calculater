#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter fisrt number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the oprators to perform opration",
        type: "list",
        name: "oprator",
        choices: ["Addition", "Subraction", "Multiplication", "Division"],
    },
]);
console.log(answer);
//conditional statement
if (answer.oprator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.oprator === "Subraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.oprator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.oprator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select oprator");
}
