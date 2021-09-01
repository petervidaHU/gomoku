import React from 'react'
import { Line } from 'react-konva';

const DrawGrid = ({ SIZE, cellN }) => {
    let GridX = [];
    (function () {
        for (let i = 1; i <= cellN; i++) {
            GridX.push({})
        }
    })()

    return (
        <>
            {GridX.map((_, i) => (
                <Line
                    key={i}
                    points={[0, (i + 1) * SIZE / cellN, SIZE, (i + 1) * SIZE / cellN]}
                    stroke="gray"
                    strokeWidth={1}
                />))
            }
            {GridX.map((_, i) => (
                <Line
                    key={i}
                    points={[(i + 1) * SIZE / cellN, 0, (i + 1) * SIZE / cellN, SIZE]}
                    stroke="gray"
                    strokeWidth={1}
                />))
            }
        </>
    )
}

export default DrawGrid
