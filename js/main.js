const rows = 50;
const columns = 50;

function createTheGrid() {
    let theGrid = document.querySelector("#theGrid");
    let table = document.createElement("table");
    table.setAttribute("id", "worldgrid");

    for (let i=0; i < rows; i++) {
        let tr = document.createElement("tr");
        for (let j=0; j<cols; j++) {
            let cell = document.createElement("td");
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    theGrid.appendChild(table);
}

window.onLoad=()=>{
    createTheGrid();
}