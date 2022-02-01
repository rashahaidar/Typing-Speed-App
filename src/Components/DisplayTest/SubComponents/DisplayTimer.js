
const DisplayTimer=({timer})=>{
   
   let min=Math.floor(timer/60)
   let sec=timer%60

   sec=sec===0 || (sec>=1 && sec<=9) ? '0' + sec : sec

   return (
      <div className="Time">{min}:{sec}</div>
   )
}

export default DisplayTimer