import React from 'react'
import { Rect } from 'react-konva';

const IconH = ({ x, y, fill, cell }) => (
    <Rect
        x={x + 2}
        y={y + 2}
        width={cell}
        height={cell}
        fill={fill}
    />
)
export default IconH;