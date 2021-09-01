import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
//import { nanoid } from 'nanoid';
import { checkWinner } from './logic/finishLogic';
import Board from './components/settings/Board';

import NavBar from './components/NavBar';
import * as t from './store/actions/actions';
import { connect } from 'react-redux';
import CanvasKonva from './components/canvas/CanvasKonva';

function App({ SIZE, player, switchPlayer, settingNextPlayer }) {
  const [cellNumber, setCellNumber] = useState(39);
  const gameTable = useRef();
  const [occupier, setOccupier] = useState(null);
  const [finishGame, setFinishGame] = useState(false);
  const [newGame, setNewGame] = useState(false)
  const [step, setStep] = useState(null)
  const [winnerXY, setWinnerXY] = useState(null)

  const gameOverText = 'Game Over. The winner: ';

  useEffect(() => {
    const temp = () => {
      let tempData = [];
      for (let i = 0; i < cellNumber; i++) {
        tempData[i] = [];
        for (let k = 0; k < cellNumber; k++) {
          tempData[i][k] = 0;
        }
      };
      return tempData;
    };
    setOccupier(temp);
    setNewGame(false);
    return () => { }
  }, [newGame === true])

  const klikkHandler = (e) => {
    if (finishGame) return;
    const leftOffset = gameTable.current.content.offsetLeft;
    const topOffset = gameTable.current.content.offsetTop;
    const x = Math.floor((e.evt.pageX - leftOffset) / (SIZE / cellNumber));
    const y = Math.floor((e.evt.pageY - topOffset) / (SIZE / cellNumber));
    
    let temp = [...occupier];
   // console.log('klikkhandlerben: ', y,x,temp[y][x])
    if (temp[y][x] == 0) {
      temp[y][x] = player;
      setStep({
        x: x,
        y: y,
        player: player
      });
      setOccupier(temp);
      // aszinkron lépésküldés
      
      isFinish(y, x, player, occupier, cellNumber);
    };
  };

  const isFinish = (y, x, player, occupier, tableSize) => {
    const { finalResult, winners } = checkWinner(y, x, player, occupier, tableSize);
    if (finalResult) { 
      setFinishGame(true) 
      setWinnerXY(winners)
    }
    else { switchPlayer() }
  };

    return (
    <>
      <NavBar />
    
      <Maindiv>
        <CanvasKonva
          winners={winnerXY}
          toRef={gameTable}
          onclick={klikkHandler}
          stepData={step}
          cellN={cellNumber}
          SIZE={SIZE}
        />
        <Board />
      </Maindiv>
      <div>
        {finishGame && `${gameOverText} ${player}`}
      </div>
     
    </>
  );
};

const reduxState = state => {
  return {
    SIZE: state.reducer.SIZE,
    player: state.reducer.player,
  }
};

const reduxDispatch = dispatch => {
  return {
    settingNextPlayer: (p) => dispatch({ type: t.SET_PLAYER, toSet: p }),
    switchPlayer: () => dispatch({ type: t.NEXT_PLAYER })
  }
};

export default connect(reduxState, reduxDispatch)(App);

const Maindiv = styled.div`
display: flex;
`;

const Game = styled.div`
border: 0px solid black;
margin: 20px;
width: 80vh;
min-width: 80vh;
height: 80vh;
min-height: 80vh;
display: flex;
flex-wrap: wrap;
`;



