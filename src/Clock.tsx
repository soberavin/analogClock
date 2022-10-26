import { useEffect, useState } from "react";
import "./clock.css";
import clockSvg from "./clock.svg";

type ClockProps = {
  curTime: Date;
};

type ClockValues = {
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Clock(props: ClockProps) {
  const [clock, setClock] = useState<ClockValues>({
    hours: props.curTime.getHours(),
    minutes: props.curTime.getMinutes(),
    seconds: props.curTime.getSeconds()
  });

  useEffect(() => {
    let { hours, minutes, seconds } = clock;

    const secInterval = setTimeout(() => {
      if (clock.seconds === 60) {
        minutes += 1;
        seconds = 0;
      } else if (clock.minutes === 60) {
        hours += 1;
        minutes = 0;
      } else if (clock.hours === 24) {
        hours = 0;
      }
      setClock({
        hours: hours,
        minutes: minutes,
        seconds: seconds + 1
      });
    }, 1000);

    return () => {
      clearTimeout(secInterval);
    };
  }, [clock]);

  return (
    <div className="Clock">
      <img className="clockSvg" src={clockSvg} alt="" />
      <span
        style={{ transform: `rotate(${clock.hours * 15}deg)` }}
        className="hours"
      ></span>
      <span
        style={{ transform: `rotate(${clock.minutes * 6}deg)` }}
        className="minutes"
      ></span>
      <span
        style={{ transform: `rotate(${clock.seconds * 6}deg)` }}
        className="seconds"
      ></span>
    </div>
  );
}
