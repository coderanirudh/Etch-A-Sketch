const container = document.querySelector("#grid-container");

function createGrids() {
    for (let i=0; i<256; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    }
}

createGrids();