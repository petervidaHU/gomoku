import React from 'react';
import { connect } from 'react-redux';
import defaultSymbols from '../../database/defaultSymbols';
import { nanoid } from 'nanoid';

const Step = ({
    steps,
    SIZE,
    cellN,
    playerColor,
    playerSymbol,
    opponentSymbol,
    opponentColor
}) => {
    const icons = {
        0: null,
        1: defaultSymbols[playerSymbol],
        2: defaultSymbols[opponentSymbol],
    };

    return (<>
        {steps.map(step => {
            let XoSymbol = icons[step.player];
            return (
                <XoSymbol
                    key={nanoid()}
                    x={step.x}
                    y={step.y}
                    cell={SIZE / cellN - 4}
                    fill={step.player === 1 ? playerColor : opponentColor}
                />
            )
        }
        )}
    </>)
}

const reduxState = state => {
    return {
        SIZE: state.reducer.SIZE,
        playerColor: state.reducer.playerColor,
        opponentColor: state.reducer.opponentColor,
        playerSymbol: state.reducer.playerSymbol,
        opponentSymbol: state.reducer.opponentSymbol
    }
};

export default connect(reduxState)(Step)
