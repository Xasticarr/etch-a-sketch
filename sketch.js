let color = "black";


document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
    
    let btn_sizing = document.querySelector("#sizing");
    btn_sizing.addEventListener("click", function(){
        let size = getGridSize();
        createBoard(size);
    })
    console.log("Initial Board Created!")
})

function createBoard(size){
    let board = document.querySelector(".flex-container");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);
    }
}

function getGridSize(){
    let input = prompt("Enter desired grid size.");
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Please enter a valid number";
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "Please enter a number between 1 and 100"
    }
    else{
        message.innerHTML = "Begin drawing!"
        return input;
    }
}

function colorDiv(){
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else{
        this.style.backgroundColor = "black"
    }

}

function setColor(colorChoice){
    color = colorChoice

}

function resetGrid(){
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}