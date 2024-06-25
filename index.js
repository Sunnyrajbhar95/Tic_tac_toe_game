const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const btn = document.querySelector(".btn");

let currentPlayer;
let gamegrid;
const winningPosition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function init() {
  currentPlayer = "X";
  gamegrid = ["", "", "", "", "", "", "", "", ""];
  boxes.forEach((box,index)=>{
      box.innerText="";
      boxes[index].classList.remove("win");
      box.style.pointerEvents="all";
      
  })
 
  btn.classList.remove("active");
  gameInfo.innerHTML = `Current Player-${currentPlayer}`;
  console.log("hello");
}
init();
function checkgameover(){
    let answer="";
    winningPosition.forEach((position)=>{
      if((gamegrid[position[0]]!==""||gamegrid[position[1]]!==""||gamegrid[position[2]]!=="")&&(gamegrid[position[0]]===gamegrid[position[1]]&&gamegrid[position[1]]===gamegrid[position[2]]))
      {
        if(gamegrid[position[0]]==="X")
        {
          answer="X";
        }
        else{
          answer="0";
        }
        boxes[position[0]].classList.add("win");
        boxes[position[1]].classList.add("win");
        boxes[position[2]].classList.add("win");
        gameInfo.innerHTML=`Winner is -${answer}`;
        boxes.forEach((box)=>{
          box.style.pointerEvents="none"
        })
        
      }
    })
    if(answer!=="")
    {
      return;
    }
    let count=0;
     gamegrid.forEach((data)=>{
      if(data!=="")
      {
        count=count+1;
      }
     })
     if(count===9)
     {
      gameInfo.innerText="Game Tied";
     }
    
}
function handleclick(index) {
  if (gamegrid[index] === "") {
    gamegrid[index] = currentPlayer;

    boxes[index].innerHTML = currentPlayer;
    if(currentPlayer === "X")
    {
        currentPlayer="0";
    }
    else{
        currentPlayer="X";
    }
    
    gameInfo.innerHTML=`Current Player-${currentPlayer}`;
    checkgameover();
  }
}

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    console.log(index);
    handleclick(index);

    
  });
});

btn.addEventListener("click", ()=>{
    init();
});
