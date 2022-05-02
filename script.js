const container = document.querySelector('.container');
const canvas = document.querySelector('#canvas');
const reset = document.querySelector('#reset');
const cells = document.getElementsByClassName('cell');
let userRow = 16;
let userColumn = 16;

function createCell() {
    // creates individual cells for etch sketch
    const cell = document.createElement('div');
    cell.classList.add('cell');
    canvas.appendChild(cell);
};

function createRows(userRow) {
    // creates rows for grid
    for (let i = 0; i < userRow; i++) {
        createCell();
    };
};

function createColumns(userColumn) {
    // creates columns for grid
    for (let i = 0; i < cells.length; i++) {
        for (let j = 0; j < userColumn; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            cells[j].appendChild(column);
        };
    };
};

function createGrid(userRow, userColumn) {
    // creates grid canvas for etch sketch of size rows x columns
    // default size to 16x16
    createRows(Number(userRow));
    createColumns(Number(userColumn));
};
createGrid(userRow, userColumn);

window.addEventListener('mouseover', (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.tagName);
    console.log(e.target.hasChildNodes());
    console.log(e.target.hasChildNodes() == false);

    // check if click target has children, if false, which all grid cells should be, colors in individual grid 
    if (e.target.hasChildNodes() === false) {
        e.target.setAttribute('style', 'background: pink;');
    } else {
        return;
    };
});

function removeGrid() {
    // removes canvas grid
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    };
};
reset.addEventListener('click', removeGrid);

function userPrompt() {
    userRow = window.prompt("Please set the number of rows. Max is 60");
    userColumn = window.prompt("Please set the number of columns. Max is 60");

    if (Number(userRow) > 60 || Number(userColumn) > 60) {
        alert('Nice try buddy but your computer would explode if you go past the limit. No grid for you.');
    } else if (userRow == null || userColumn == null) {
        alert('You forgot the numbers? Shame on you');
    } else if (Number(userRow) !== Number(userColumn)) {
        alert('Please make rows and columns equal');
    } else {
        alert('You followed the instructions, good on ya. Enjoy');
        createGrid(userRow, userColumn);
    }
};

reset.addEventListener('click', userPrompt);
