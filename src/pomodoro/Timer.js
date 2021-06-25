import React from 'react'
import { minutesToDuration, secondsToDuration } from '../utils/duration'


function Timer({ focusTimer, breakTimer, isTimerRunning, isStopped, currentSession, remainingTimer  }) {
  //this is to display the 'Paused' text when we pause the timer
    const pausedText = isTimerRunning ? '' : 'PAUSED'

    //currentTimer is to change between focuseTimer or breakTimer depending on previous session

    const currentTimer = (currentSession === 'Focusing' ? focusTimer : breakTimer)
    const percentage = ((currentTimer * 60 - remainingTimer) / (currentTimer * 60)) * 100

    //this is to only display when the play button is pressed otherwise it is hidden
    if (!isStopped) {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <h2 data-testid="session-title">
                        {/*will display currentSession and time*/}
                            {currentSession} for {minutesToDuration(currentTimer)} minutes
                        </h2>
                        <p
                            className="lead"
                            data-testid='session-sub-title'>
                        {/*will display remainingTimer*/}
                            {secondsToDuration(remainingTimer)} remaining
                        </p>
                    </div>
                </div>
                <h2>{pausedText}</h2>
                <div className="row">
                    <div className="col">
                        <div className="progress" style={{ height: "20px"}}>
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                aria-valuenow={percentage}
                                style={{ width: `${percentage}%` }}
                            >
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </ div>
        )
    } else {
        return null
    }

}

export default Timer