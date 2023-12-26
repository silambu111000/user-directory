import React, { useState, useEffect, useRef } from 'react';

// import './../../../styles/UserView.css'
import './../styles/DigitalClock.css'
function DigitalClock(props) {
  const timeInst = useRef(new Date(props.time));
  const [time, setTime] = useState(timeInst.current.toLocaleTimeString());
  const [isActive, setIsActive] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        let time = timeInst.current.getTime() + 1000;
        timeInst.current.setTime(time)
        setTime(timeInst.current.toLocaleTimeString());
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  const handlePauseStart = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="digital_clock">
      <p className='mR10'>{time}</p>
      <button className='clock_btn' onClick={handlePauseStart}>{isActive ? 'Pause' : 'Start'}</button>
    </div>
  );
}

export default DigitalClock;
