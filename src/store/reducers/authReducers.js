import * as t from '../actions/actions';

const init = {
    authUser: ''
}

const authReducers = (state = init, action) => {
    switch (action.type) {
        case t.SIGNUP_SUCCESS:
            console.log('signup success user', action.payload.email)
            return {
                ...state,
                authUser: action.payload
            }
        case t.SIGNUP_ERROR:
            console.log('error feedback in the reducer!', action.payload)
            return {
                ...state
            }    
    }
    return state;

}

export default authReducers