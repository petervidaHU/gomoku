import React from 'react';
import { Circle } from 'react-konva';

const IconO = ({ x, y, fill, cell }) => (
    <Circle
        x={x + cell / 2.5 + 5}
        y={y + cell / 2.5 + 5}
        radius={cell / 2.5}
        fill={fill}
    />
)

export default IconO;