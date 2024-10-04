const container = document.querySelector("#container");
const boxSize = 16; // Size of each box in pixels
const margin = 2; // Margin around each box in pixels
const totalSize = 600; // Total size of the container

// Calculate how many boxes fit along one side
const boxesPerSide = Math.floor(totalSize / (boxSize + margin));
// Calculate the total number of boxes
const totalBoxes = boxesPerSide * boxesPerSide;

// Create and append the boxes to the container
for (let i = 0; i < totalBoxes; i++) {
    const squareGrids = document.createElement("div");
    squareGrids.classList.add("squareGrids");
    container.appendChild(squareGrids);
}