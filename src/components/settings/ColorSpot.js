import React from 'react';
import styled from 'styled-components';

const ColorSpot = ({ color, onchange, side }) => {
    return (
        <Spot
        data-side={side}
            color={color}
            onClick={onchange}
        />
    )
}

export default ColorSpot;

const Spot = styled.div`
margin: .3rem;
border-radius: 50%;
width: 3rem;
height: 3rem;
background-color: ${({ color }) => `#${color}`};
`;
