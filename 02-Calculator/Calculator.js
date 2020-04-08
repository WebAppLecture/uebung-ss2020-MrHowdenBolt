import { MyMath } from "../01-MyMath/MyMath.js";

export class Calculator {

    constructor(numpad, outputCalculation, outputSolution) {
        this.numpad = numpad;
        this.clearoutputCalculation = outputCalculation;
        this.outputSolution = outputSolution;
        this.setupNumPad();

    }

    setupNumPad() {
        let buttons = this.numpad.children;
        for (let button of buttons) {
            button.addEventListener('click', this.onButtonClick.bind(this, button.innerHTML))
        };

    }

    onButtonClick(symbol) {
        console.log(symbol);
    }

    print(string) {

    }

    printSolution(string) {

    }

    clear() {

    }

}
