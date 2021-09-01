import React from 'react';
import styled from 'styled-components';
import { Layer, Stage } from 'react-konva';
import defaultSymbols from './../../database/defaultSymbols';



const IconSpot = ({ onclick, name, side }) => {
   
    return (
        <SymbolSpot data-side={side} data-choosen={name} onClick={onclick}>
            <Stage width={30} height={30}>
                <Layer>
                   {defaultSymbols[name]({x:0,y:0,fill:"#111",cell:20})}
                </Layer>
            </Stage>
        </SymbolSpot>
    )
};

export default IconSpot;

const SymbolSpot = styled.div`
width: 30px;
height: 30px
`;
