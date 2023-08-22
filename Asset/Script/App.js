const gameBoard=document.getElementById('game-board');
const textinfo=document.getElementById('info');

const startCells=["","","","","","","","",""];

let firstHit="circle";
textinfo.textContent="Circle Goes First Hit !";


function createBoard(){
    startCells.forEach((_cells,index)=>{
        const cellEliment=document.createElement('div');
        cellEliment.classList.add('square');
        cellEliment.addEventListener('click',cellContent)
        gameBoard.append(cellEliment);
        cellEliment.id=index;
    });
}

createBoard();


function cellContent(e){
    const wrapDiv=document.createElement('div');
    wrapDiv.classList.add(firstHit);
    e.target.append(wrapDiv);
    firstHit=firstHit==="circle" ? "cross" : "circle";
    textinfo.textContent="It is now "+firstHit+"'s Turn .";
    e.target.removeEventListener('click',cellContent);
    checkWinner();
}

function checkWinner(){
    const getSquare=document.querySelectorAll('.square');
    console.log(getSquare); 
    const winningCombo=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    console.log(getSquare[4]);

    winningCombo.forEach(array=>{
        
        let circleWin=array.every(cell=> 
            getSquare[cell].firstChild ?.classList.contains('circle'));

            if(circleWin){
                textinfo.textContent="Circle Wins 🎉";
                getSquare.forEach(square=>square.replaceWith(square.cloneNode(true)));
                return;
            }
    });

}