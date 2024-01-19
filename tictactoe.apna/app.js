let boxes = Array.from(document.querySelectorAll(".box"));
let resetBtn = document.querySelector("#resetBtn");

let turnO = false; //playerX, playerO

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]




boxes.forEach(box => {

    box.addEventListener('click', ()=> {

        
        box.innerText = "Abcd"

        if(turnO ){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true

        }
        box.disabled = true;

        let indexMatching = checkWinner(box);
        console.log(indexMatching);
        
    })
    
});

const checkWinner = (box) => {
    outerLoop: for (let pattern of winPatterns) {
        for (let element of pattern) {
            if (boxes.indexOf(box) === element) {
                return element;
                // break outerLoop; // Use the labeled statement to break out of the outer loop
            }
        }
    }
};







