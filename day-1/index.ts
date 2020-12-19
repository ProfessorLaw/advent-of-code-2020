#!/usr/bin/env node

import * as fs from 'fs';

const filePath = './input.txt';
if (!fs.existsSync(filePath)) {
    process.exit(1);
}

// Reading the input file
const file = fs.readFileSync(filePath, 'utf-8');
const input = file.split('\n').map((element) => parseInt(element));

// Part 1 : Getting the muplication of 2 numbers that gives 2020 when adding them.

let foundNumbers = false;
let number1 : number, number2 : number;
mainLoop:
for (number1 of input) {
    for (number2 of input) {
        if (number1 + number2 === 2020) {
            foundNumbers = true;
            break mainLoop;
        }
    }
}

if (foundNumbers === true) {
    console.log(`We found the numbers ! : ${number1} and ${number2}. Multiplying them gives ${number1*number2}`);
} else {
    console.log('No matching found');
}