const gameBoard=document.getElementById('game-board');
const info=document.getElementById('info');

const startCells=["","","","","","","","",""];


function createBoard(){
    startCells.forEach((cells,index)=>{
        const cellEliment=document.createElement('div');
        cellEliment.classList.add('square');
        gameBoard.append(cellEliment);
    });
}

createBoard();