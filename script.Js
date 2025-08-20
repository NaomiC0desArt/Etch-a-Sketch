const container =  document.querySelector(".container");

function createGrid(num){

    for(let i = 0; i < (num * num) ; i++){
    const box = document.createElement("div");
    box.classList.add("cajita");
    box.style.cssText = `flex: 0 0 calc(100% / ${num}); height: calc(100% / ${num});`;

    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor= "blue"; 
    });

    container.appendChild(box);
}
}

function askForGridSize(){
    
    while(true){
        let gridSize = Number(window.prompt("Please enter a number between 10 - 100 to be your sketch size: "));

        if(gridSize === 0){
        return null;
        }

        if(!isNaN(gridSize) && gridSize >= 10 && gridSize <= 100){
            return gridSize;
        }
    }
}

function createNewGrid(){

    const gridSize =  askForGridSize();

    if(gridSize !== null){
        container.innerHTML = '';
        createGrid(gridSize);
    }
}

function cleanGrid(){
    
    const boxes = container.querySelectorAll('div');

        boxes.forEach(box =>{
            box.style.backgroundColor = "transparent";
        })
}



createGrid(16)

const btnCreate = document.querySelector("#btnCreate");
btnCreate.addEventListener('click', createNewGrid);

const btnClean = document.querySelector("#cleanGrid");
btnClean.addEventListener('click', cleanGrid);