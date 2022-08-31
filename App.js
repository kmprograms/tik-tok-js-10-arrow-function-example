/*
    Przygotuj obiekt, w którym przechowasz liczbę całkowitą oraz
    metodę, która zwraca wartość tej liczby podniesioną do potęgi
    drugiej, ale tylko wtedy, kiedy ta liczba będzie dodatnia.
*/

const numberManager = {
    n: 10,
    getSquare() {
        function validate() {
            console.log(`n = ${this.n}`)
            if (this.n <= 0) {
                throw new Error('Value must be positive')
            }
        }

        validate();
        return this.n ** 2;
    }
}

// numberManager.n = -10;
console.log(numberManager.getSquare())
