import React from 'react'
import { Line } from 'react-konva';

const IconX = ({ x, y, fill, cell }) => (
    <>
        <Line
            points={[x + 4, y + 4, x + 22, y + 22]}
            stroke={fill}
            strokeWidth={4}
            lineCap="round"
        />
        <Line
            points={[x + 22, y + 4, x + 4, y + 22]}
            stroke={fill}
            strokeWidth={4}
            lineCap="round"
        />
    </>
)
export default IconX;