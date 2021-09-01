import React from 'react'
import { Star } from 'react-konva';

const IconCS = ({ x, y, fill, cell }) => (
  <Star
    x={x + cell / 2 + 3}
    y={y + cell / 2 + 3}
    innerRadius={cell / 3.8}
    outerRadius={cell / 1.6}
    fill={fill}
  />
)
export default IconCS;