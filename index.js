let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("resetbtn");
let nwebtn=document.querySelector(".newbtn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector(".msg");


let turn0 = true;

const winningNo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
];
const boxesDisable = () =>
{
    for(let box of boxes)
    {
        box.disabled=true;

    }
};
const boxesEnable = () =>
    {
        for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
    
        }
    };
    

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = "0";
            turn0 = false;
            box.disabled = true;
        }
        else {
            box.innerText = "X";
            turn0 = true;
            box.disabled = true;

        }
        checkWinner();


    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    boxesDisable();
}
const checkWinner = () => {
    for (let pattern of winningNo) {

        
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if(posval1 !="" && posval2 !="" && posval3 !="" )
        {
            if(posval1===posval2 && posval2===posval3)
            {
                console.log("Winner",posval1);
                showWinner(posval1);
            }
        }

    
    }
};


const resetGame = () =>
{
  turn0=true;
  boxesEnable();
  msgcontainer.classList.add("hide");
};


nwebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);