//create header with dom 
const header = document.createElement('h1');
header.className = 'header';
document.body.appendChild(header);
header.textContent = 'Etch-a-Sketch';

//create div for buttons 
const buttonDiv = document.createElement('div');
buttonDiv.className = 'button-div';
document.body.appendChild(buttonDiv);

//create container div with dom 
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

//create button to clear current Grid 

const clearButton = document.createElement('button');
clearButton.className = 'clear-button';
clearButton.textContent = 'Clear';
clearButton.addEventListener('click', resetColors);
buttonDiv.appendChild(clearButton);

//create button to create new grid size

const newGridButton = document.createElement('button');
newGridButton.className = 'newGrid-button';
newGridButton.textContent = 'New Grid';
newGridButton.addEventListener('click', sizePrompt);
buttonDiv.appendChild(newGridButton);

//create content with dom 
const content = document.createElement('div');
content.className = 'content';
container.appendChild(content);

//default grid 

createGrid(16);

function createGrid(size) {

//create grid columns and rows + delete old divs
let grid = document.querySelector('.content');
let divs = grid.querySelectorAll('div');
divs.forEach((div) => div.remove());
grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

//for loop to create divs and populate grid 

for (let i = 0; i < size * size; i++) {
    let newDiv = document.createElement('div');
    newDiv.addEventListener("mouseover", colorSquare);
    newDiv.className = 'next-div';
    content.insertAdjacentElement("beforeend", newDiv);
}
}

//change size of the grid if choice between 2 and 100
function changeSize(size) {
    if (size >= 2 && size <= 100) {
        createGrid(size);
    } else {
       sizePrompt();
    }
}
//prompt for user to enter size of grid 
function sizePrompt() {
    let value = window.prompt("Enter a grid size between 2 and 100.");
    if (value === null) {
        return;
    }
    changeSize(value);
}

//background will change to a random rgb color
function colorSquare() {
    let red = getRandomInt(256); 
    let green = getRandomInt(256); 
    let blue = getRandomInt(256); 
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; 
}

//function to choose random ints for rgb values
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  //function to reset grid back to default white
  function resetColors() {
      let divs = document.getElementsByClassName('next-div');
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.backgroundColor = 'whitesmoke';
        }
  }