console.log(`welcome to tic tac toe`);

// music to play while actions in the game 
const music = new Audio("audios/8bit.mp3");
const turnMusic = new Audio("audios/ting.mp3");
const gameOver = new Audio("audios/gameOver.wav");


let turn = "X";
let isgameOver = false;

// function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// function to check win
const checkWin = ()=>{
    let boxText = document.getElementsByClassName("boxText");
    let wins = [

        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    
    wins.forEach( e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
            document.querySelector('.info').innerHTML = boxText[e[0]].innerText + " win"
            isgameOver = true
            document.querySelector(".imgBox").querySelector('img').style.width = '200px'
        }
    
    })
}

// Game Logic

// music.play();
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(box =>{
    let boxText = box.querySelector(".boxText");
    box.addEventListener("click",(e)=>{
        if(boxText.innerHTML === ""){
            boxText.innerHTML = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if(!isgameOver){
                document.getElementsByClassName('info')[0].innerHTML = "Turn for " + turn;
            }
        }
    })

})


// add onclick listener to reset button

reset.addEventListener('click', ()=>{
    let boxTexts = document.querySelectorAll(".boxText");
    Array.from(boxTexts).forEach(element => {
        element.innerHTML = "";
        turn = "X"
        document.querySelector(".imgBox").querySelector('img').style.width = '0'
        document.getElementsByClassName('info')[0].innerHTML = "Turn for " + turn;

    })

})