import {Calculator} from './Calculator.js'

window.Calculator = Calculator;

let numpad = document.querySelector(".numpad");
let outputcalc = document.querySelector("#calculation");
let outputSolution = document.querySelector("#solution");

window.calc = new Calculator(numpad, outputcalc, outputSolution);