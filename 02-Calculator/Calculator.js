import {MyMath} from "../01-MyMath/MyMath.js";

export class Calculator {

    constructor(numpad, outputCalculation, outputSolution) {
        this.numpad = numpad;
        this.clearoutputCalculation = outputCalculation;
        this.outputSolution = outputSolution;
        this.setupNumPad();

    }

    setupNumPad() {
        let button = this.numpad.children;
        let length = button.length;
        for (let i = 0; i < length; i++) {
            button[i].addEventListener('click', this.onButtonClick.bind(button[i]));
        } 

    }

    onButtonClick(symbol) {
        symbol = symbol.target.textContent;
        console.log(symbol);
    }

    print(string) {

    }

    printSolution(string) {

    }

    clear() {

    }

}
