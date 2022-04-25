const SET_CURRENT_USER = 'SET_CURRENT_USER';

const initialState = {}
    // id: 123,
    // name: 'Socio',
    // surname: 'Path',
    // login: 'nmbrsdntl',
    // photo: 'https://images.unsplash.com/photo-1610558310044-dc89b9c4b4a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',



export const setCurrentUser = (userProfile) => {
    return {
        type: SET_CURRENT_USER,
        userProfile
    }
}
const currentUserReducer = (state = initialState, action) => {

    let result = state

    switch (action.type) {
        case SET_CURRENT_USER:
            result = { ...state};
            result = action.userProfile

            
            return result;
        default:
            return result;
    }


}

export default currentUserReducer