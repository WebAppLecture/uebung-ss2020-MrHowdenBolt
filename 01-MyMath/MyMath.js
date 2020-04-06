/**
 * 'export' ist nötig falls wir MyMath in einem anderen Modul importieren wollen.
 * 'class' legt fest dass es sich hierbei um eine Klasse handelt.
 * 'MyMath' ist der Name der Klasse.
 */
export class MyMath {

    /**
     * Der Konstruktor wird aufgerufen um neue Instanzen der Klasse zu generieren.
     * vgl. let myNumber = new MyMath(3);
     * 
     * @param value Unser Initialwert für den Wert von unserer MyMath Instanz.
     */
    constructor(value) {
        // 'this' referenziert den Kontext in dem die aktuelle Funktion aufgerufen wird. 
        // Hier referenziert es die Instanz der Klasse MyMath die wir gerade erstellen.
        // mit 'value * 1' erzwingen wir, dass value als number gelesen wird.
        this.value = value * 1; 
        if (isNaN(this.value)) {
            this.value = 0
        }

    }

    add(value) {
        this.value +=value;
        return this;
    }

    subtract(value) {
        this.value -= value;
        return this;
    }

    multiply(value) {
        this.value *= value;
        return this;
    }

    divide(value) {
        if (value != 0) {
        this.value /= value;
        }
        return this;
    }

    pow(value) {
        let x = this.value;
       if(value > 0) {
           for(let i = 1; i < value; i++) {
               this.value *= x;
           }
       } else if ( value == 0) {
           this.value = 1;
       }
       return this;
    }

    faculty() {
        let n = this.value;
        if (n == 0){
            this.value = 1
        } else if (n % 1 === 0){
            for ( let i = n; i > 0; i--){
                this.value *= i;
            }
        }  
        return this;
    }
}
