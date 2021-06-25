import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import Timer from "./Timer"
import Controls from "./Controls"
import Play from "./Play"

function Pomodoro() {
  // all the useStates for the components
  const [focusTimer, setFocusTimer] = useState(25)
  const [breakTimer, setBreakTimer] = useState(5)
  const [currentSession, setCurrentSession] = useState('Focusing')
  const [remainingTimer, setRemainingTimer] = useState(1500)
  const [controlsDisabled, setControlsDisabled] = useState(false)
  const [stopDisabled, setStopDisabled] = useState(true)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [isStopped, setIsStopped] = useState(true)
  
  const alarmSound = new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`)
// Executes every second and once it hits zero it will sound the alarm and will switch to the next session
  useInterval(() => {
    setRemainingTimer(remainingTimer - 1)
    if (remainingTimer <= 0) {
      alarmSound.play()
      if (currentSession === "Focusing") {
        setCurrentSession("On Break") 
        setRemainingTimer(breakTimer* 60)
      } else if (currentSession === "On Break") {
        setCurrentSession("Focusing")
        setRemainingTimer(focusTimer * 60)
      }
    }
  },// if its running it will execute every second
  isTimerRunning ? 1000 : null
  )
// handles the resest when clicking the stop button
  const handleReset = () => {
    setCurrentSession("Focusing")
    setFocusTimer(25)
    setBreakTimer(5)
    setRemainingTimer(1500)
    setStopDisabled(true)
    setIsTimerRunning(false)
    setIsStopped(true)
    setControlsDisabled(false)
  }
//the play/pause button functions when clicked
  const playPause = () => {
    setStopDisabled(false)
    setIsStopped(false)
    setIsTimerRunning((current) => !current)
    setControlsDisabled(true)
  }

  
  //returns all the components used 
  return (
    <div>
      <Controls
        focusTimer={focusTimer}
        setFocusTimer={setFocusTimer}
        setRemainingTimer={setRemainingTimer}
        breakTimer={breakTimer}
        setBreakTimer={setBreakTimer}
        controlsDisabled={controlsDisabled}
      />
      <Play
        playPause={playPause}
        classNames={classNames}
        isTimerRunning={isTimerRunning}
        handleReset={handleReset}
        stopDisabled={stopDisabled}
      />
      <Timer
        focusTimer={focusTimer}
        breakTimer={breakTimer}
        remainingTimer={remainingTimer}
        isTimerRunning={isTimerRunning}
        isStopped={isStopped}
        currentSession={currentSession}
      />
      <audio src={alarmSound} type="audio/mp3"></audio>
    </ div>
  )

}

export default Pomodoro;
