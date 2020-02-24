import React, { FC } from 'react';
import Hand from './hand';
import useTick from './useTick';

const getAngle = (max: number) => (n: number) => (360 * (n % max)) / max;

const getHoursAngle = getAngle(12);
const getMinutesAngle = getAngle(60);
const getSecondsAngle = getAngle(60);

const radius = 100;
const diameter = radius * 2;

type Props = {
  initialTime?: number;
};

const AnalogClock: FC<Props> = ({ initialTime = Date.now() }) => {
  const time = useTick(initialTime, 33);
  const date = new Date(time);
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  const ms = date.getMilliseconds();
  const secondsAngleWithMS = getSecondsAngle(s) + getSecondsAngle(1) * ms / 1000;

  const viewBox = `0 0 ${diameter} ${diameter}`;
  const style = { height: '100%', overflow: 'visible' };

  return (
    <svg viewBox={viewBox} style={style}>
      <g transform={`translate(${radius} ${radius})`}>
        <circle r={radius} stroke="black" strokeWidth={0.5} fill="transparent" />
        <Hand r={radius} width={2.5} length={0.7} angle={getHoursAngle(h)} />
        <Hand r={radius} width={2} length={0.9} angle={getMinutesAngle(m)} />
        <Hand r={radius} length={0.95} angle={secondsAngleWithMS} />
      </g>
    </svg>
  );
};

export default AnalogClock;
