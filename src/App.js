import React from 'react';
import TimeCard from './TimeCard';
import TimerCard from './TimerCard';
import AlarmClockCard from './AlarmClockCard';
import './App.css';

function App() {
  return (
    <div className="app">
      <TimeCard />
      <TimerCard />
      <AlarmClockCard />
    </div>
  );
}

export default App;
