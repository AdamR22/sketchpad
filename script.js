const btnClear = document.querySelector(".eraser");
const gridAdjuster = document.getElementById("grid-changer");
const sketchpad = document.querySelector(".sketchpad");

window.addEventListener('load', gridCreator(16, 16));

gridAdjuster.addEventListener('click', () => {

    let numOfSquares = prompt("Enter number of squares per side");

    if (numOfSquares < 100 && numOfSquares > 0) {
        
        gridAdjuster.innerText = `${numOfSquares} x ${numOfSquares}`
        
        gridCreator(numOfSquares, numOfSquares);
    } else {
        alert("Number cannot be less than zero and greater than 100;")
    }

});

btnClear.addEventListener('click', clear);

function gridCreator(rows, cols) {
    sketchpad.style.setProperty('--grid-rows', rows);
    sketchpad.style.setProperty('--grid-cols', cols);
    
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        sketchpad.appendChild(cell).className = "grid-item";
    }
}

function clear() {
    const gridItems = document.querySelectorAll(".grid-item");
    
    gridItems.forEach((gridItem) => {
        gridItem.style.cssText = "background-color: #ffffff;";
    });
}

function createHoverEffect() {

    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', () => {
            const pickedColor = document.getElementById('colour-picker').value;
            gridItem.style.cssText = `background-color:${pickedColor};`;
        });
    })
}

createHoverEffect();