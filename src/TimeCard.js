import React, { useState, useEffect } from 'react';

function TimeCard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="card">
      <h2>Текущее время</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}

export default TimeCard;
