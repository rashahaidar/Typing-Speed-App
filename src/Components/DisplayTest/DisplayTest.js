import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {generateRandomText} from "../../helper/AppHelper";
import DisplayParagraph from "./SubComponents/DisplayParagraph";
import DisplayTimer from "./SubComponents/DisplayTimer"
import TextArea from "./SubComponents/TextArea";
import DisplayResult from "../DisplayResult/DisplayResult"
import './DisplayTest.css'


const DisplayTest=()=>{
  
  let params=useParams()
  const difficulty=params.difficulty
  const timeInSec=(params.time)*60
  const [userInput,setUserInput]=useState('')
  const [randomParagraphArr ]=useState(generateRandomText(difficulty).split(''))
  const [time,setTime]=useState(timeInSec)
  const [startTimer,setStartTimer]=useState(false)
  const [finishTest,setFinishTest]=useState(false)

  const [totalEntries,setTotalEntries]=useState(0)
  const [correctEntries,setCorrectEntries]=useState(0)
  const [errorEntries,setErrorEntries]=useState(0)
  const [errorsArr,setErrorsArr]=useState([])
  const [fixedErrors,setFixedErrors]=useState(0)
  const [backSpaceMode,setBackSpaceMode]=useState(false)
  const [currentIndex,setCurrentIndex]=useState(0)
  
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

 
  const handleTextChange=(e)=>{
    const userInputArr=e.target.value.split('')
    if(!startTimer)
      setStartTimer(true)
    if(backSpaceMode===false)
    { 
      if(userInputArr[currentIndex]===randomParagraphArr[currentIndex]){
        setCorrectEntries(correctEntries=>correctEntries+1)
        if(errorsArr.includes(currentIndex))
        {
          setFixedErrors(fixedErrors=>fixedErrors+1)
          setErrorsArr(errorsArr.filter(error=>error!==currentIndex))
        }
      }
      else
      {
        setErrorEntries(errorEntries=>errorEntries+1)
        if(errorsArr.includes(currentIndex))
        {
          setFixedErrors(fixedErrors=>fixedErrors+1)
        }
        else
          setErrorsArr([...errorsArr,currentIndex])
      
      }
  
      setTotalEntries(totalEntries=>totalEntries+1)
      setCurrentIndex(currIndex=>currIndex+1)
    }
    setUserInput(e.target.value)
    if(e.target.value.length===randomParagraphArr.length)
    {
      setStartTimer(false);
      setFinishTest(true)
    }
  }
  

  const handleMouseDown=(e)=>{
   if(e.button===0)
      e.preventDefault()
  }

  const handleKeyDownPress=(e)=>
  {
    switch(e.keyCode)
    {
      case 37: case 39: case 38: case 40: case 13:
         e.preventDefault(); 
         break; 
      case 8:
        setBackSpaceMode(true)
        if(currentIndex!==0)
            setCurrentIndex(curIndex=>curIndex-1)
        break;
      default:
         setBackSpaceMode(false);
         break;
    }
  }

 return(
     <>
      { finishTest ?
      <div>
        <DisplayResult  timer={time===0? timeInSec : time} totalEntries={totalEntries} errorEntries={errorEntries} fixedErrors={fixedErrors} correctEntries={correctEntries}/>
      </div>
      : 
      <div className="DisplayTest-Container">
        <DisplayTimer timer={time} />
        <DisplayParagraph randomParagraphArr={randomParagraphArr} userInput={userInput}/>
        <TextArea disabled={finishTest} handleTextChange={handleTextChange}  handleKeyDownPress={handleKeyDownPress} handleMouseDown={handleMouseDown}/>
      </div>
      }
     </>
     )
  }

export default DisplayTest