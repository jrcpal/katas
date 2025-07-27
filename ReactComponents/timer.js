

import {useEffect, useState} from 'react'

    const [timer, setTimer] = useState(0)
    const [isTimerRunning, setIsTimerRunning] = useState(true)

    useEffect(() => {
      if (!isTimerRunning) return;

      const intervalId = setInterval(() => {
      setTimer(t => t + 1)
      }, 1000)
      
      return () => clearInterval(intervalId)
    }, [isTimerRunning])

    const resetTimer = () => {
      setTimer(0)
    }

    const toggleTimer = () => {
      setIsTimerRunning(prev => !prev)
    }

    return (

    <>
      <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
        <h1>Timer: {timer}</h1>
        <button style={{border: '1px solid white'}} onClick={resetTimer}>Reset Timer</button>
        <button style={{border: '1px solid white'}} onClick={toggleTimer}>{isTimerRunning ? 'Stop' : 'Start'} Timer</button>
      </div>
    </>

  )
