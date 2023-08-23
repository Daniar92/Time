import React, { useState, useEffect } from 'react';

function TimerCard() {
  const [timeInput, setTimeInput] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            if (hours > 0) {
              setHours(hours - 1);
              setMinutes(59);
              setSeconds(59);
            } else {
              setIsRunning(false);
            }
          }
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, hours, minutes, seconds]);

  const toggleTimer = () => {
    if (timeInput) {
      const [h, m, s] = timeInput.split(':').map(Number);
      setHours(h || 0);
      setMinutes(m || 0);
      setSeconds(s || 0);
      setIsRunning(prevIsRunning => !prevIsRunning);
    }
  };

  const handleTimeInputChange = event => {
    setTimeInput(event.target.value);
  };

  return (
    <div className="card">
      <h2>Таймер</h2>
      <div>
        <input
          type="text"
          value={timeInput}
          onChange={handleTimeInputChange}
          placeholder="чч:мм:сс"
        />
        <button onClick={toggleTimer}>{isRunning ? 'Пауза' : 'Старт'}</button>
      </div>
      <div>
        <p>Осталось времени: {hours} часов, {minutes} минут, {seconds} секунд</p>
      </div>
    </div>
  );
}

export default TimerCard;
