const container = document.querySelector("#container");

for (let i = 0; i < 1089; i++) {
    const squareGrids = document.createElement("div");
    squareGrids.classList.add("squareGrids");
    container.appendChild(squareGrids);
}