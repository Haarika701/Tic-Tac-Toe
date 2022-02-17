import React,{useState} from "react";

function TicTacToe(){

    const[playerChoice,setPlayerChoice] = useState('X')
    const[game,setGame] = useState(Array(9).fill('-'))

    function handleClick(index){
          if(game[index] !== "-"){
              return
          }
            console.log("Grid is clicked")
            const newGame = [...game]
            setGame(newGame);
            newGame[index] = playerChoice
            setPlayerChoice(playerChoice === "X" ? "O" : "X" );
    }
    
    return (
 <div class="grid-container">
  <div class="grid-item"onClick={() => handleClick(0)}>{game[0]}</div>
  <div class="grid-item"onClick={() => handleClick(1)}>{game[1]}</div>  
  <div class="grid-item"onClick={()=>handleClick(2)}>{game[2]}</div>
  <div class="grid-item"onClick={()=>handleClick(3)}>{game[3]}</div>
  <div class="grid-item"onClick={()=>handleClick(4)}>{game[4]}</div>
  <div class="grid-item"onClick={()=>handleClick(5)}>{game[5]}</div>
  <div class="grid-item"onClick={()=>handleClick(6)}>{game[6]}</div>
  <div class="grid-item"onClick={()=>handleClick(7)}>{game[7]}</div>
  <div class="grid-item"onClick={()=>handleClick(8)}>{game[8]}</div>
  
</div>
    )
}

export default TicTacToe