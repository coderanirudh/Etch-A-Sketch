const container = document.querySelector("#grid-container");

function createGrids() {

    const userInput = prompt("Enter the no.of squares: ");
    const temp = userInput * userInput;

    container.replaceChildren();

    for (let i=0; i<temp; i++) {
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


const button = document.querySelector("button");
button.addEventListener("click", createGrids);
