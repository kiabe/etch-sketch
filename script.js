const container = document.querySelector('.container');
let cells = document.getElementsByClassName('cell');

function createCell() {
    // creates individual cells for etch sketch
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
};

function createRows(rowNum) {
    // creates rows for grid
    for (let i = 0; i < rowNum; i++) {
        createCell();
    };
};

function createColumns(columnNum) {
    // creates columns for grid
    for (let i = 0; i < cells.length; i++) {
        for (let j = 0; j < columnNum; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            cells[j].appendChild(column);
        };
    };
};

function createGrid() {
    // creates grid canvas for etch sketch of size rows x columns
    createRows(16);
    createColumns(16);
};

window.addEventListener('click', (e) => {
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
