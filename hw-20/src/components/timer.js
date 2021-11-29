import React from "react";
import styles from './timer.css'

function Timer(props) {
  const { startTime, step } = props;
  const [time, setTime] = React.useState(startTime)
  const [timerOn, setTimeOn] = React.useState(true)

  React.useEffect(() => {
    let interval = null;
    let stepInProgress = 1000;
    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => {
          if (prevTime > 0) {
            console.log(`Залишилось часу: ${Math.floor(prevTime / stepInProgress)} sec`)
            return (prevTime - (stepInProgress * step));
          } else {
            setTimeOn(false);
            return prevTime = startTime;
          }
        })
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval);

  }, [timerOn])

  return (
    <div className="timer">
      <div className="title">
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <button className="button start" onClick={() => setTimeOn(true)}>Start</button>
      <button className="button stop" onClick={() => setTimeOn(false)}>Stop</button>
      <button className="button resume" onClick={() => setTimeOn(true)}>Resume</button>
      <button className="button reset" onClick={() => setTime(startTime)}>Reset</button>
      <div className="progressBar">
        <div className="progress" style={{ width: `${(100 / startTime * time)}%` }}></div>
      </div>

    </div>
  );
}

export default Timer;