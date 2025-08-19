const contendor =  document.querySelector(".container");

function createGrid(num){

    for(let i = 0; i < (num * num) ; i++){
    const box = document.createElement("div");
    box.classList.add("cajita");
    box.style.cssText = `flex: 0 0 calc(100% / ${num}); height: calc(100% / ${num});`;

    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor= "blue"; 
    });

    contendor.appendChild(box);
}
}

function askForGridSize(){
    let gridSize = Number(window.prompt("Please enter a number between 10 - 100 to be your sketch size: "));

    while(gridSize < 10 || gridSize > 100){

        if(gridSize < 10){
           gridSize = Number(prompt("The number needs to be greater than 10 and less than 100:"));
        }
        else if(gridSize > 100)
            {
            gridSize = Number(prompt("The number needs to be less than 100:"))
        }
    }

    return gridSize;
}

function createNewGrid(){
    contendor.innerHTML = '';
    const gridSize =  askForGridSize();
    createGrid(gridSize);
}

createGrid(16)

const btnCreate = document.querySelector("#btnCreate");
btnCreate.addEventListener('click', createNewGrid);