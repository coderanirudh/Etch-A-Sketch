const container = document.querySelector("#grid-container");

function createGrids() {
    for (let i=0; i<256; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);
    }
}

createGrids();

const hover = document.querySelector(".square");

container.addEventListener("mouseover", () => {
    container.style.backgroundColor = "black";
})

container.addEventListener("mouseout", () => {
    container.style.backgroundColor = "";
})