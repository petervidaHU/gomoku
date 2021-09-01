import React from 'react';
import { connect } from 'react-redux';
//import styled from 'styled-components';
import * as t from '../../store/actions/actions';
import OneSymbolChooser from './oneSymbolChooser';

const SymbolChooser = (props) => {

  const symbolClickHandler = (e) => {
    e.currentTarget.dataset.side === "player"
      ? props.settingPlayerSymbol(e.currentTarget.dataset.choosen)
      : props.settingOpponentSymbol(e.currentTarget.dataset.choosen)
  };

  return (
    <>
      <OneSymbolChooser
        text="Choose your symbol:"
        handler={symbolClickHandler}
        side="player"
      />
      <OneSymbolChooser
        text="Choose your opponent's symbol:"
        handler={symbolClickHandler}
        side="opponent"
      />
    </>
  )
};

const reduxState = state => {
  return {
    playerSymbol: state.reducer.playerSymbol,
    opponentSymbol: state.reducer.playerSymbol,
  }
};

const reduxDispatch = dispatch => {
  return {
    settingPlayerSymbol: (p) => dispatch({ type: t.SET_PLAYER_SYMBOL, symbolToSet: p }),
    settingOpponentSymbol: (p) => dispatch({ type: t.SET_OPPONENT_SYMBOL, symbolToSet: p }),
  }
};

export default connect(reduxState, reduxDispatch)(SymbolChooser);


