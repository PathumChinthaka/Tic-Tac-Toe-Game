const gameBoard=document.getElementById('game-board');
const info=document.getElementById('info');

const startCells=["","","","","","","","",""];


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
    wrapDiv.classList.add('cross');
    e.target.append(wrapDiv);
}