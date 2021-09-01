import React, { useState, useEffect } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import { ReactReduxContext, Provider } from 'react-redux';

import DrawBackground from './DrawBackground';
import DrawGrid from './DrawGrid';
import Step from './Step';

const CanvasKonva = ({
    SIZE,
    winners,
    cellN,
    toRef,
    stepData,
    onclick }) => {
    const [steps, setSteps] = useState([]);
    const [winLine, setWinLine] = useState(null);
    const cellWidth = SIZE / cellN;

    useEffect(() => {
        if (stepData) {
            let tempObj = {};
            tempObj.x = Math.floor(stepData.x * cellWidth)
            tempObj.y = Math.floor(stepData.y * cellWidth)
            tempObj.player = stepData.player
            setSteps([...steps, { ...tempObj }])
        }
    }, [stepData])

    useEffect(() => {
        if (winners !== null) {
          //  console.log('useffect winner: ', winners);
            const a = (winners[0][1] * cellWidth) + (cellWidth / 2 )
            const b = (winners[0][0] * cellWidth)  + (cellWidth / 2)
            const c = (winners[0][3] * cellWidth) + (cellWidth / 2)
            const d = (winners[0][2] * cellWidth)  + (cellWidth / 2)
            setWinLine(<Line
                points={[a, b, c, d]}
                stroke="black"
                strokeWidth={6}
                lineCap="round"
            />)

        }

        return () => { }
    }, [winners])

    return (
        <ReactReduxContext.Consumer>
            {({ store }) => (
                <Stage ref={toRef} width={SIZE} height={SIZE} >
                    <Provider store={store}>
                        <Layer>
                            <DrawBackground SIZE={SIZE} onclick={onclick} />
                            <DrawGrid SIZE={SIZE} cellN={cellN} />
                        </Layer>
                        <Layer>
                            <Step steps={steps} cellN={cellN} />
                            {winLine}
                        </Layer>
                    </Provider>
                </Stage>
            )}
        </ReactReduxContext.Consumer>
    )
};

export default CanvasKonva;