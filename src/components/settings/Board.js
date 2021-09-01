import React, { useState } from 'react';
import styled from 'styled-components';
//import * as t from './store/actions';
import { connect } from 'react-redux';
import ColorChooser from './ColorChooser';
import SymbolChooser from './SymbolChooser';
import { Button } from '@material-ui/core';
import { signup, signin } from './../../store/actions/auth';

const Board = (props) => {
    //const [whoIsNext, setwhoIsNext] = useState(0);

    const whoIsNextText = {
        1: 'It is YOUR turn',
        2: 'Wait for your opponent',
        3: 'Your teammate \'s turn'
    };

    const timeLeft = () => {
        return 'time'
    };

    const startNewGame = () => {
        //  settingNextPlayer(1);
        //  setFinishGame(false);
        //  setNewGame(true);
    };

    const settingsModal = () => {

    };

    const openGame = () => {

    };

    const signinHandler = () => {
        console.log('signin')
    };

    const loginHandler = () => {
        const looser = () => {
            console.log('inside loginHandler => looser func.');
        };
        console.log('loginHandler working!');
        props.signinRed("teszt5@email.hu", "123456", looser)
    };

    const logoutHandler = () => {
        const looser = () => {
            console.log('inside loginHandler => looser func.');
        };
        console.log('loginHandler working!');
        props.signinRed("teszt5@email.hu", "123456", looser)
    };

    console.log('profile: ', props.user);

    return (
        <BoardDiv>

            <WhoIsNext>
                {whoIsNextText[props.player]}
            </WhoIsNext>
            <Time>
                {timeLeft()}
            </Time>
            <ColorChooser />
            <SymbolChooser />
            <Button variant="contained" onClick={openGame}> Open Game </Button>
            <Button variant="contained" onClick={() => props.signupRed("teszt9@email.hu", "123456")}> Sign in </Button>
            <Button variant="contained" onClick={loginHandler}> login </Button>
            <Button variant="contained" onClick={logoutHandler}> logout </Button>
            <Button variant="contained" onClick={settingsModal}> Settings </Button>


        </BoardDiv>
    )
};

const reduxState = state => {
    return {
        player: state.reducer.player,
        //user: state.authReducers.authUser
        user: state.firebaseReducer.auth
    }
};

function reduxDispatch(dispatch) {
    return {
        signupRed: (email, password) => dispatch(signup(email, password)),
        signinRed: (email, password, handleLooser) => dispatch(signin(email, password, handleLooser))
    }
}

export default connect(reduxState, reduxDispatch)(Board);

const Title = styled.h1`
`;

const WhoIsNext = styled.div`

`;

const Time = styled.div`
`;

const BoardDiv = styled.div`
margin: 20px 0;
display: flex;
flex-direction: column;
width: 100%;
`;