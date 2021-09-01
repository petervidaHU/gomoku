import React from 'react';
import * as t from '../../store/actions/actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import OneColorChooser from './OneColorChooser';

const ColorChooser = (props) => {
  const defaultColors = [
    'ff0000',
    '00ff00',
    '0000ff',
    '000000',
    '888888',
    'ffff00',
    'ff00ff',
    '00ffff',
    '125874',
    'ccdd00',
    'c025fa',
    'f571ba',
    '00ff55',
  ];

  const colorClickHandler = (e) => {
   e.target.dataset.side === "player"
      ? props.settingPlayerColor(`#${e.target.getAttribute("color")}`)
      : props.settingOpponentColor(`#${e.target.getAttribute("color")}`);
  };

  return (
    <>
      <OneColorChooser
        text="Choose your color:"
        handler={colorClickHandler}
        colors={defaultColors}
        side="player"
      />
      <OneColorChooser
        text="Choose your opponent's color:"
        handler={colorClickHandler}
        colors={defaultColors}
        side="opponent"
      />
    </>
  )
};

const reduxDispatch = dispatch => {
  return {
    settingPlayerColor: (p) => dispatch({ type: t.SET_PLAYER_COLOR, colorToSet: p }),
    settingOpponentColor: (p) => dispatch({ type: t.SET_OPPONENT_COLOR, colorToSet: p }),
  }
};

export default connect(null, reduxDispatch)(ColorChooser);
