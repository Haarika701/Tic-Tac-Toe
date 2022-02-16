import React,{useState} from "react";

function TicTacToe(){

    const[playerChoice,setPlayerChoice] = useState('X')

    
    return (
 <div class="grid-container">
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
  <div class="grid-item"></div>
</div>
    )
}

export default TicTacToe