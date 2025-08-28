let container;
let color = "black"; //initialized

function getRandomColor() {
    var r = Math.floor(Math.random() * 256); // Random between 0-255
    var g = Math.floor(Math.random() * 256); // Random between 0-255
    var b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgba(' + r + ',' + g + ',' + b + ')';
}

function setColor(){
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            if(color === "greyScale"){
                if(square.style.opacity < 1){
                    square.style.opacity = +square.style.opacity + 0.1;
                }
                else if(square.style.backgroundColor === "white") square.style.opacity = "0.1";
            }
            else{
                square.style.opacity = 1;
            }


            if(color === "rainbow"){
                square.style.backgroundColor = getRandomColor();
            }

            else{
                square.style.backgroundColor = "black";
            }
        });
    });
}

function createGrid(size){
    container = document.createElement("div");
    container.classList.add("container")

    for(let i=0; i < size; i++){ //rows
        const row = document.createElement("div");

        for(let j=0; j < size; j++){ //columns
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        row.classList.add("row");
        container.appendChild(row);
    }
    const body = document.querySelector("body");
    body.appendChild(container);
    setColor();
}

createGrid(16); //it starts with a 16x16 grid

// resize btn
const resizeBtn = document.getElementById("resize-btn");
resizeBtn.addEventListener("click", () => {
    let size;
    do{
        size = prompt(`Insert the desired size: \nA (a number between 1 and 100)`);
    } while(isNaN(size) || size <= 0 || size > 100 );

    container.remove();
    createGrid(size);
})

// erase btn
const eraseBtn = document.getElementById("erase-btn");
eraseBtn.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
        square.style.opacity = 1;
    })
})

// black btn
const blackBtn = document.getElementById("black-btn");
blackBtn.addEventListener("click", () => {
    color = "black";
    setColor();
})

// rainbow btn
const rainbowBtn = document.getElementById("rainbow-btn");
rainbowBtn.addEventListener("click", () => {
    color = "rainbow";
    setColor();
})

// gray scale btn
const greyScaleBtn = document.getElementById("greyScale-btn");
greyScaleBtn.addEventListener("click", () => {
    color = "greyScale";
    setColor();
})