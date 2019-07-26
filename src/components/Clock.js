import React, { useState, useEffect } from "react";

const Clock = ({name}) => {
  const [time, setTime] = useState(new Date());

  const tick = () => {
    setTime(new Date());
  };

  useEffect(() => {
    tick();
  }, 500);

function currentTime() {
 let thatTime = time.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit"
  })
  if(thatTime[0] == 0){
    thatTime = thatTime.replace(/^0+/, '')
  }
    return (
      <h1 id="currentTime" style={{ fontFamily: "Orbitron", fontSize: "100px" }}>
        {thatTime}
      </h1>
    );
  };

  const greeting = () => {
    var currentHour = new Date().getHours();
    if(1 <= currentHour && currentHour < 12){
        return <div>Good morning, {name}</div>
    } else if(13 <= currentHour && currentHour < 18) {
        return <div> Good afternoon, {name}</div>
    } return <div>Good evening, {name}</div>
  }
  return (
    <div className="container text-center center text-white">
      {currentTime()}
      <h4 style={{ fontFamily: "Orbitron", fontSize: "50px" }}>
        {greeting()}
      </h4>
    </div>
  );
};

export default Clock;
