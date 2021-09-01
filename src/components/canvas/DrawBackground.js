import React from 'react'
import { Rect } from 'react-konva'

const DrawBackground = ({ SIZE, onclick }) => (
        <Rect
            x={0}
            y={0}
            width={SIZE}
            height={SIZE}
            fill="#fef"
            onClick={onclick}
        />
    )

export default DrawBackground
