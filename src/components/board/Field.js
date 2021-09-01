import React from 'react';
import * as t from '../../store/actions';
import styled from 'styled-components';
import { connect } from 'react-redux';
import defaultSymbols from '../../database/defaultSymbols';

const Def = () => (<p> </p>)

const Field = ({ occ, size, playerColor, playerSymbol, opponentSymbol, opponentColor }) => {
  const icons = {
    0: null,
    1: defaultSymbols[playerSymbol],
    2: defaultSymbols[opponentSymbol],
  };
  const Playa = occ ? icons[occ] : Def;
  
  return (
    <FieldDiv occ={occ} size={size}>
      <Playa color={occ === 1 ? playerColor : opponentColor}/>
    </FieldDiv>
  )
};
const reduxState = state => {
  return {
    playerColor: state.playerColor,
    opponentColor: state.opponentColor,
    playerSymbol: state.playerSymbol,
    opponentSymbol: state.opponentSymbol
  }
};

export default connect(reduxState)(Field);

const FieldDiv = styled.div`

box-sizing: border-box;
border: .5px solid rgba(10,10,10,.2);
width: ${({ size }) => `${size}px`};
height: ${({ size }) => `${size}px`};

&:hover {
  background-color: cyan;
}
`;
