import React, { useState } from "react";
import useInterval from '../common/useInterval'

export default function Timer({className}) {

  const [time, setTime] = useState();
    useInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);


  return (
    <div className={className}>
      <div className="timeWrapper">
        <p className="time">{time ? time : "loading"}</p>
      </div>
    </div>
  );
}
