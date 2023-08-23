import React, { useState } from 'react';

function AlarmClockCard() {
  const [alarms, setAlarms] = useState([]);
  const [newAlarm, setNewAlarm] = useState('');
  
  const addAlarm = () => {
    if (alarms.length < 4) {
      setAlarms([...alarms, newAlarm]);
      setNewAlarm('');
    }
  };

  const removeAlarm = index => {
    const updatedAlarms = alarms.filter((_, i) => i !== index);
    setAlarms(updatedAlarms);
  };

  return (
    <div className="card">
      <h2>Будильник</h2>
      <div>
        {alarms.map((alarm, index) => (
          <div key={index}>
            <p>Будильник {index + 1}: {alarm}</p>
            {index >= 3 && (
              <button onClick={() => removeAlarm(index)}>Удалить</button>
            )}
          </div>
        ))}
      </div>
      {alarms.length < 4 && (
        <div>
          <input
            type="time"
            value={newAlarm}
            onChange={e => setNewAlarm(e.target.value)}
          />
          <button onClick={addAlarm}>Добавить</button>
        </div>
      )}
    </div>
  );
}

export default AlarmClockCard;
