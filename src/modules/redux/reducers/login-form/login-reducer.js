
const LOGIN = 'LOGIN'

const initialState = {
    login: ''
}

const loginReducer = (state = initialState, action) => {
    let result = state
    switch (action.type) {
        case LOGIN:

            return result;

        default:
            return result;
    }
}

export default loginReducer