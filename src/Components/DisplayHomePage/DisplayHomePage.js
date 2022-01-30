import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { TIMES, DIFFICULTY } from "../../helper/DataHelper"
import {  useNavigate} from "react-router-dom";
import './DisplayHomePage.css'


const DisplayHomePage = () => {

   const [time, setTime] = useState(0)
   const [difficulty, setDifficulty] = useState('')
   const [errors, setErrors] = useState({})
   
   const navigate = useNavigate();

   const handleSubmit = (event) => {
      event.preventDefault()
      const newErrors = {}
      if (!time)
         newErrors.time = 'Select a time !';
      if (!difficulty)
         newErrors.difficulty = 'Select difficulty !';
     
      if(Object.keys(newErrors).length>0) 
         setErrors(newErrors);
      else{
         setErrors({});
         navigate(`/test/${time}/${difficulty}`);
      }
   }


   return (
      <div className="DisplayInput-Container">

         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3"  >
               <Form.Select onChange={(event) => setTime(event.target.value)}>

                  <option value="">Select Test Timer</option>
                  {TIMES.map(time => (
                     <option key={time.key} value={time.value}>{time.key}</option>
                  ))}

               </Form.Select>
               {errors.time && <span className="error-message">{errors.time}</span>}
            </Form.Group>
            <Form.Group className="mb-3">
               <Form.Select onChange={(event) => setDifficulty(event.target.value)}>

                  <option value="">Select Test Difficulty</option>
                  {DIFFICULTY.map(difficulty => (
                     <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
               </Form.Select>
               {errors.difficulty && <span className="error-message">{errors.difficulty}</span>}

            </Form.Group>
            <Button type="submit" className="SubmitButton">
               Start Test
            </Button>
         </Form>
      </div>

   )
}

export default DisplayHomePage