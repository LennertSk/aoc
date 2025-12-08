"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var fileContent = fs.readFileSync("one.txt", "utf-8");
var instructions = fileContent.trim().split("\n");
var pos = 50, passesZeroTimes = 0, stopsAtZeroTimes = 0;
console.log(instructions);
instructions.forEach(function (instruction) {
    console.log(instruction.replaceAll('L', '-').replaceAll('R', ''));
    // const turn = parseInt(instruction.replaceAll('L', '-').replaceAll('R', ''));
    // const absTurn = Math.abs(turn);
    // const distanceToZero = (turn < 0 ? pos : 100 - pos) % 100;
    // if (absTurn >= distanceToZero) {
    //   passesZeroTimes += Math.floor((absTurn - distanceToZero) / 100) + (pos === 0 ? 0 : 1);
    // }
    // pos = (pos + (turn % 100) + 100) % 100;
    // if (pos === 0) {
    //   stopsAtZeroTimes++;
    // }
});
console.log(stopsAtZeroTimes);
