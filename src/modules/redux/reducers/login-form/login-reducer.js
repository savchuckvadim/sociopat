
const LOGIN = 'LOGIN'

const initialState = {
    email: '',
    password: '',
    rememberMe: true
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

export const login = (values) => (dispatc) => {
 
}

export default loginReducer