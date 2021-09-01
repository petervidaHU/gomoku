import React from 'react';
import styled from 'styled-components';
import IconSpot from './IconSpot';
import defaultSymbols from './../../database/defaultSymbols';

const OneSymbolChooser = ({ text, handler, side }) => {
    return (
        <div>
            <p> {text}</p>
            <SymbolChooserDiv>
                {Object.entries(defaultSymbols).map(symbol =>
                (<IconSpot
                    key={symbol[0]}
                    onclick={handler}
                    Simbol={symbol[0]}
                    name={symbol[0]}
                    side={side}
                />
                )
                )}
            </SymbolChooserDiv>
        </div>
    )
}

export default OneSymbolChooser;

const SymbolChooserDiv = styled.div`
display: flex;
flex-wrap: wrap;
`;
