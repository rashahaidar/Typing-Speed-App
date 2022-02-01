const DisplayParagraph=({randomParagraphArr,userInput})=>{

    //const randomParagraphArr=randomParagraph.split('')
    const userInputArr=userInput.split('')
    return(
    <div className="paragraph">
        {
        randomParagraphArr.map((c,index)=>{
            let color;
            if(index<userInputArr.length)
            {
                color=c===userInputArr[index] ? (color='#8CDF82') : '#FB473E'
            }
            return(
            <span key={index} style={{background: color}}>{c}</span>
            )
        })
        }
    </div>
  )
}

export default DisplayParagraph