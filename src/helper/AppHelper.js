import { EnumDifficultyValue } from './EnumHelper.tsx'
let randomParagraph = require('random-paragraph')

export const generateRandomText=(difficulty)=>randomParagraph({sentences:EnumDifficultyValue[difficulty]})
    
export const numberOfCorrectWords=(paragraph,userInput)=>{
    let count = 0;
    const userInputArr = userInput.split(' ')
    paragraph.split(' ').map((c, index) => {
      if (index < userInputArr.length) {
        if (c === userInputArr[index]) 
          count++
         }
      })
    return count
  }

export const totalWordsTyped=(userInput)=>userInput.split(' ').length


export const typingSpeed=(wordCount,time)=>Math.round(wordCount/time)

export const netSpeed=(correctWords,time)=>Math.round(correctWords/time)

export const accuracy=(netspeed,typingspeed)=>Math.round((netspeed/typingspeed)*100)
