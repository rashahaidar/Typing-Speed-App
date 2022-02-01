import { EnumDifficultyValue } from './EnumHelper.tsx'
let randomParagraph = require('random-paragraph')

export const generateRandomText=(difficulty)=>randomParagraph({sentences:EnumDifficultyValue[difficulty]});
    
export const totalWordsTyped=(userInput)=>userInput.split(' ').length

export const typingSpeed=(totalEntries,time)=>Math.round(((totalEntries/5)/time))
export const netSpeed=(typingspeed,errorrate)=>Math.round(typingspeed-errorrate)

export const accuracy=(totalEntries,correctEntries)=>((correctEntries/totalEntries)*100).toFixed(1)

export const unFixedErrors=(errorEntries,fixedErrors)=>errorEntries-fixedErrors
