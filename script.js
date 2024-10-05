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

    for (let i = 1; i <= numOfSquares**2; i++) {
        const square = document.createComment("div");
        square.setAttribute("class", "square");

        square.style.height = `${704 / numOfSquares -2}`;
        square.style.width = `${704 / numOfSquares -2}`;

        container.appendChild(square);
    }

    container.addEventListener("mouseover", (e) => {
        const squareColor = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256),];
        let target = e.target;

        target.style.backgroundcolor = `rgb(${squareColor.join(",")})`;
    });
}

squareGrid ();

const reziseGridBtn = document.querySelector("#resizeGrid");
resizeGridBtn.addEventListener("click", (e) => {
    squareGrid(e);
})