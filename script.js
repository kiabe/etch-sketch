const container = document.querySelector('.container');

// creates divs to serve as grids for etch sketch
function createGrid() {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    grid.style.cssText = 'border-style: solid;';
    grid.textContent = 'foo';
    return grid;
}

// purpose to slap many divs in the container
function drawGrid() {
    // doc frag is staging area where multiple elements can be added here first and then to DOM
    let docFrag = document.createDocumentFragment();

    // loop to create as many grids as defined and append to docFrag
    for (let i = 0; i < 6; i++) {
        docFrag.appendChild(createGrid());   
    }

    // after loop finishes, add all elements at once
    container.appendChild(docFrag);
}

drawGrid();
