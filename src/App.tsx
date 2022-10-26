import "./styles.css";
import Clock from "./Clock";
import { useEffect, useState } from "react";
import getTimeReq from "./getTimeRequest";

export default function App() {
  const [time, setTime] = useState<Date>();

  useEffect(() => {
    getTimeReq().then((val) => {
      const curTime: Date = new Date(val.datetime);
      setTime(curTime);
    });
  }, []);

  if (!time) return null;

  return (
    <div className="App">
      <Clock curTime={time} />
    </div>
  );
}
