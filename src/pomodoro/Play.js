import React from 'react'

//Adds the play and stop buttons to the Timer

function Play({ playPause, classNames, isTimerRunning, handleReset, stopDisabled }) {
    return (
        <div className="row">
            <div className="col">
                <div className="btn-group btn-group-lg">
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-testid="play-pause"
                        onClick={playPause}/*runs playPause funciton when clicked*/
                    >
                        <span className={classNames({
                            oi: true,
                            'oi-media-play': !isTimerRunning,
                            'oi-media-pause': isTimerRunning
                        })} />
                    </button>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-testid="stop"
                        onClick={handleReset}/*resest everything to default when clicked*/
                        disabled={stopDisabled}/*this is disabled when timer is not running*/
                    >
                        <span className="oi oi-media-stop" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Play