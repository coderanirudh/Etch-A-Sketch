const container = document.querySelector("#grid-container");

function createGrids() {
    for (let i=0; i<256; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        container.appendChild(div);

        //add the eventlistener for mouseover and mouseout for color change
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        })
        div.addEventListener("mouseout", () => {
            div.style.backgroundColor = "black";
        })
    }
}

createGrids();