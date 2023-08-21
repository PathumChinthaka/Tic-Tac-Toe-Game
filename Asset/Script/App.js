const gameBoard=document.getElementById('game-board');
const textinfo=document.getElementById('info');

const startCells=["","","","","","","","",""];

let firstHit="circle";
textinfo.textContent="Circle Goes First Hit !";


function createBoard(){
    startCells.forEach((_cells,index)=>{
        const cellEliment=document.createElement('div');
        cellEliment.classList.add('square');
        cellEliment.addEventListener('click',addCircle)
        gameBoard.append(cellEliment);
        cellEliment.id=index;
    });
}

createBoard();


function addCircle(e){
    const wrapDiv=document.createElement('div');
    wrapDiv.classList.add(firstHit);
    e.target.append(wrapDiv);
    firstHit=firstHit==="circle" ? "cross" : "circle";
    textinfo.textContent="It is now "+firstHit+"'s Turn .";
    e.target.removeEventListener('click',firstHit);
    checkScore();
}
