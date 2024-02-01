
const totalCells = 76;
const createBingoBoard = () => {
    // take div container
    const bingoBoard = document.getElementById("container");

    // create cells
    for(let i = 0; i < totalCells; i ++){
        const cellDiv = document.createElement("div");
        cellDiv.className = "cell";

        // create numbers  // put numbers inside the created cells
        const cellNumber = document.createElement("h3");
        cellNumber.innerText = i + 1;

        cellDiv.appendChild(cellNumber)
        bingoBoard.appendChild(cellDiv)
    }
}


const randomNumbers = [];



const generateRandomNumber = function (x)  {
    x = document.getElementById('demo').innerHTML;
    return x = Math.floor(Math.random() * (totalCells - 1)) + 1;     
}

window.onload = function () {
    createBingoBoard();
}

const btnRandomGenerator = document.getElementById("btnRandom")
btnRandomGenerator.addEventListener("click",generateRandomNumber)