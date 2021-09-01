import * as t from '../actions/actions';


const init = {
    SIZE: 1000,
    player: 1,
    playerColor: '#FF00FF',
    opponentColor: '#FF0000',
    playerSymbol: 'iconx',
    opponentSymbol: 'icono',
};

const reducer = (state = init, action) => {
    switch (action.type) {
        case t.NEXT_PLAYER:
            return {
                ...state,
                player: state.player === 1 ? 2 : 1
            }
        case t.SET_PLAYER:
            return {
                ...state,
                player: action.toSet,
            }
        case t.SET_PLAYER_COLOR:
            return {
                ...state,
                playerColor: action.colorToSet,

            }
        case t.SET_PLAYER_SYMBOL:
            return {
                ...state,
                playerSymbol: action.symbolToSet,

            }
        case t.SET_OPPONENT_COLOR:
            return {
                ...state,
                opponentColor: action.colorToSet,

            }
        case t.SET_OPPONENT_SYMBOL:
            return {
                ...state,
                opponentSymbol: action.symbolToSet,

            }

    };
    return state;
};

export default reducer;
