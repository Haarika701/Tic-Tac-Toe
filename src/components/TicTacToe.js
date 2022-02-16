import React,{useState} from "react";

function TicTacToe(){

    const[playerChoice,setPlayerChoice] = useState('X')
    const[game,setGame] = useState(Array(9).fill('-'))

    function handClick(){
            console.log("Grid is clicked")
    }
    
    return (
 <div class="grid-container">
  <div class="grid-item" onClick={handClick [0]}>{game [0]}</div>
  <div class="grid-item"onClick={handClick [1]}>{game[1]}</div>  
  <div class="grid-item"onClick={handClick[2]}>{game[2]}</div>
  <div class="grid-item" onClick={handClick[3]}>{game[3]}</div>
  <div class="grid-item" onClick={handClick[4]}>{game[4]}</div>
  <div class="grid-item" onClick={handClick[5]}>{game[5]}</div>
  <div class="grid-item" onClick={handClick[6]}>{game[6]}</div>
  <div class="grid-item" onClick={handClick[7]}>{game[7]}</div>
  <div class="grid-item" onClick={handClick[8]}>{game[8]}</div>
  
</div>
    )
}

export default TicTacToe