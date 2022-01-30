import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {generateRandomText} from "../../helper/AppHelper";
import DisplayParagraph from "../DisplayParagraph";
import DisplayTimer from "../DisplayTimer"
import TextArea from "../TextArea";
import DisplayResult from "../DisplayResult/DisplayResult"
import './DisplayTest.css'


const DisplayTest=()=>{
  
  let params=useParams()
  const difficulty=params.difficulty
  const timeInSec=(params.time)*60
  const [userInput,setUserInput]=useState('')
  const [randomParagraph ]=useState(generateRandomText(difficulty))
  const [time,setTime]=useState(timeInSec)
  const [startTimer,setStartTimer]=useState(false)
  const [finishTest,setFinishTest]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      if(time>0 && startTimer)
        setTime(prevProps=>prevProps-1)
      else
        if(time===0 && startTimer){
          setStartTimer(false);
          setFinishTest(true)
        }   
    },1000)
  },[time,startTimer])

  const onTextChange=(e)=>{
    setUserInput(e.target.value)
    if(!startTimer)
      setStartTimer(true)
    if(e.target.value.length===randomParagraph.length)
    {
      setStartTimer(false);
      setFinishTest(true)
    }
  }

 return(
     <>
     
     { finishTest ?
     <div>
       <DisplayResult  timer={time===0? timeInSec : time} userInput={userInput} randomParagraph={randomParagraph}/>
       
     </div>
     :
     <div className="DisplayTest-Container">
        <DisplayTimer timer={time} />
        <DisplayParagraph randomParagraph={randomParagraph} userInput={userInput}/>
        
        <TextArea disabled={finishTest} onTextChange={onTextChange}/>
     
     </div>
    
    }
     
     </>
     )
  }

export default DisplayTest