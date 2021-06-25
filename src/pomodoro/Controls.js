import React from 'react'
import { minutesToDuration } from '../utils/duration'

function Controls({ focusTimer, setFocusTimer, breakTimer, setBreakTimer, setRemainingTimer, controlsDisabled }) {
    //functions that will increase or decrease the times
    const increaseFocusTimer = () => {
        setFocusTimer((time) => Math.min(60, time + 5))
      //this is so when we change the focus time it also  changes the remainingTimer
        setRemainingTimer((time) => Math.min(3600, time + 5 * 60))
    }

    const decreaseFocusTimer = () => {
        setFocusTimer((time) => Math.max(5, time - 5))
      //this is so when decreaseing thr focusTimer it also decreases the remainingTimer
        setRemainingTimer((time) => Math.max(300, time - 5 * 60))
    }

    const increaseBreakTimer = () => {
        setBreakTimer((time) => Math.min(15, time + 1))
    }

    const decreaseBreakTimer = () => {
        setBreakTimer((time) => Math.max(1, time - 1))
    }

    return (
        <div className="row">
            <div className="col">
                <div className="input-group input-group-lg">
                    <span className="input-group-text" data-testid="duration-focus">
                    {/*we use the minutesToDuration funciton to change the number of the focusTimer to look like a real time*/}
                        Focus Duration: {minutesToDuration(focusTimer)}
                    </span>
                    <div className="input-group-append">
                        <button
                            className="btn btn-secondary"
                            type="button"
                            data-testid="decrease-focus"
                            onClick={decreaseFocusTimer} /*when clicked will decrease timer*/
                            disabled={controlsDisabled}/*this will disable the buttons when the timer is running*/
                        > 
                            <span className="oi oi-minus" />
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-testid="increase-focus"
                            onClick={increaseFocusTimer}/*increase timer*/
                            disabled={controlsDisabled}/*disables button when timer is running*/
                        >
                            <span className="oi oi-plus" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="float-right">
                    <div className="input-group input-group-lg">
                        <span className="input-group-text" data-testid="duration-break">
                            Break Duration: {minutesToDuration(breakTimer)}
                        {/*takes a number and changes it to a time ex: 20:00*/}
                        </span>
                        <div className="input-group-append">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-testid="decrease-break"
                                onClick={decreaseBreakTimer}/*decrease timer when clicked*/
                                disabled={controlsDisabled}/*disables button when timer is running*/
                            >
                                <span className="oi oi-minus" />
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-testid="increase-break"
                                onClick={increaseBreakTimer}/*increases timer when clicked*/
                                disabled={controlsDisabled}/*disables button when timer is running*/
                            >
                                <span className="oi oi-plus" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Controls