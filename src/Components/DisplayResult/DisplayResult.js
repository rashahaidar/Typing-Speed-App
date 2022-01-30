import { useEffect, useState } from 'react'
import { netSpeed ,typingSpeed,totalWordsTyped,accuracy,numberOfCorrectWords} from '../../helper/AppHelper.js'
import { Spinner,Button,Card} from "react-bootstrap"
import { useNavigate } from 'react-router'
import {buildStyles ,CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './DisplayResult.css'

const DisplayResult=({timer,userInput,randomParagraph})=>{

    const navigate = useNavigate();
    const [loading,setLoading]=useState(true);
    const netspeed=netSpeed(numberOfCorrectWords(randomParagraph,userInput),timer/60);
    const typingspeed=typingSpeed(totalWordsTyped(userInput),timer/60);
    const accu=accuracy(netspeed,typingspeed);

    useEffect(()=>{
      setTimeout(()=>{
           setLoading(false);
       },1000)
    },[])

    const handleClick=()=>{
      navigate(`/Home`);
    }

    return(
    <>
       {loading ?
       <div className='DisplaySpinner-Container'>
          <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
          </Spinner>
       </div>
       :
      <div className='DisplayResult-Container'>
         <div className="Circular-Progress">
            <CircularProgressbarWithChildren value={accu} styles={buildStyles({pathColor:''})}  >
              <div style={{ width: 40, marginTop: -5,marginRight:30 ,fontSize:20}}>
                  <strong>Accuracy</strong>
              </div>
              <div style={{ fontSize: 25, marginTop: 5, }}>
                  <strong>{accu}%</strong>
              </div>
            </CircularProgressbarWithChildren> 
         </div>
         <div className='DisplaySpeed'>
            <Card style={{ width: '12rem' }} border='light'>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Net Speed</Card.Subtitle>
                <Card.Text>
                  <strong style={{fontSize:'3em'}} >{netspeed}</strong> wpm
                </Card.Text>
            </Card.Body>
            </Card>
            <Card style={{ width: '12rem' }} border='light'>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Typing Speed</Card.Subtitle>
                <Card.Text>
                  <strong style={{fontSize:'3em'}} >{typingspeed}</strong> wpm
                </Card.Text>
            </Card.Body>
            </Card>
         </div>
         <div className='ResultButton'>
              <Button variant="outline-dark" onClick={handleClick}><strong>Retake Test</strong></Button>
         </div>
      </div>
      }
    </>
    )
}
export default DisplayResult