//create header with dom 
const header = document.createElement('h1');
header.className = 'header';
document.body.appendChild(header);
header.textContent = 'Etch-a-Sketch';

//create container div with dom 
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

//create content with dom 
const content = document.createElement('div');
content.className = 'content';
container.appendChild(content);


function createGrid(size) {

//create grid columns and rows
let grid = document.querySelector('.content');
grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

//for loop to create divs and populate grid 

for (let i = 0; i < size * size; i++) {
    let newDiv = document.createElement('div');
    newDiv.addEventListener("mouseover", colorSquare);
    newDiv.className = 'next-div';
    newDiv.textContent = i + 1;
    content.insertAdjacentElement("beforeend", newDiv);
}
}

changeSize(16);

function changeSize(size) {
    if (size > 2 && size < 100) {
        createGrid(size);
    } else {
        console.log("error, too many or too little squares");
    }
}

function colorSquare() {
    this.style.backgroundColor = 'black';
}