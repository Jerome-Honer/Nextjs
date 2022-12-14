import Link from 'next/link'
import { middleware } from './functions/redirect';


export default function(){
  const wepons = ["shootgun","rock","paper","shootgun"]


  const getRandomNumber = (min,max) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const choseEnemy = (weponidx) =>{
    let n = getRandomNumber(0,1)
    n = n * -1
    if (n < 0){
      n = 1
    }
    
    let draw = getRandomNumber(0,10)

    if (draw === 5){
      alert("draw")
    }
    else if (n === 1){
      alert("lose")
    }
    else{
      alert("win")
    }

  }

  const chose = (idx) =>{
    let curr = wepons[idx + 1]
    choseEnemy(idx + 1)
  }

  return(
    <>
      <h1 id = "headerText">Rock Paper Shootgun</h1>


      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div id = "OptionDiv">
        <button id = "optionButtons" onClick = {() => {chose(0)}}>Rock</button>
      </div>
      <div id = "OptionDiv">
        <button id = "optionButtons" onClick = {() => {chose(1)}}>Paper</button>
      </div>
      <div id = "OptionDiv">
        <button id = "optionButtons" onClick = {() => {chose(2)}}>Shootgun</button>
      </div>
    </>
  );
}
