import {MyMath} from "../01-MyMath/MyMath.js";

export class Calculator {

    constructor(numpad, outputCalculation, outputSolution) {
        this.numpad = numpad;
        this.clearoutputCalculation = outputCalculation;
        this.outputSolution = outputSolution;
        this.setupNumPad();

    }

    setupNumPad() {
        let buttons = this.numpad.children;
        let length = buttons.length;
        for (let i = 0; i < length; i++) {
            let innerButton = buttons[i].innerHTML;
            buttons[i].addEventListener('click', this.onButtonClick.bind(this, innerButton));
        } 

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
