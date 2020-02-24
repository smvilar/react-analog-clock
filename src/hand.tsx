import React, { FC } from 'react';

type Props = {
  r: number;
  angle: number;
  length?: number;
  width?: number;
};

const Hand: FC<Props> = ({ r, angle, length = 1, width = 1 }) => (
  <line
    stroke="#000"
    strokeWidth={width}
    strokeLinecap="round"
    x1={0}
    y1={0}
    x2={0}
    y2={-r * length}
    transform={`rotate(${angle})`}
  />
);

export default Hand;
