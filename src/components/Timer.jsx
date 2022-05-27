import React, {  useState } from 'react'

 const Timer = () => {
    const [timer, setTimer] = useState(0)
    const [watchID, setWatchID]=useState(null)

    const start=()=>{
        if(!watchID){
            const id = setInterval(()=>{
                if(timer===10){
                    clearInterval(id)
                }else{
                    setTimer((timer)=>timer+1)
                    setWatchID(id)
                }
            },1000);
            setWatchID(id)

        }
            
        
        return ()=>{
            clearInterval(watchID)
        }

    }
    const pause=()=>{
        clearInterval(watchID)
        setWatchID(null)
    }

    const reset=()=>{
        clearInterval(watchID)
        setTimer(0)
        setWatchID(null)
    }
    



  return (
      <div>
    <div>Timer</div>
    <h1>{timer}</h1>
    <button onClick={start}>Start</button>
    <button  onClick={pause}>Pause</button>
    <button  onClick={reset}>Reset</button>



    </div>

  )
}
export default Timer

