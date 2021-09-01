import React from 'react';
import ColorSpot from './ColorSpot';
import styled from 'styled-components';

const OneColorChooser = ({ text, handler, colors, side }) => {
    return (
        <div>
            <p> {text}</p>
            <ColorChooserDiv>
                {colors.map(color => (
                    <ColorSpot
                        key={color}
                        onchange={handler}
                        color={color} 
                        side={side}
                        />
                        ))}
            </ColorChooserDiv>
        </div>
    )
}

export default OneColorChooser;

const ColorChooserDiv = styled.div`
display: flex;
flex-wrap: wrap;
`;