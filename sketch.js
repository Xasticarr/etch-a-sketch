document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
    console.log("Initial Board Created!")
})

function createBoard(size){
    let board = document.querySelector(".flex-container");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", div);
    }
}