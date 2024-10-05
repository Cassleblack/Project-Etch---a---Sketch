function squareGrid (clickEvent) {
    const container = document.querySelector("#container");
    let numOfSquares = 32;

    if (clickEvent) {
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.remove();
        });

        do {
            numOfSquares = parseInt(prompt("Enter the numbeer of square you want: "));

            if (numOfSquares > 100) alert("Enter a number between 1 & 100");
        } while (numOfSquares > 100)
    }

    
}