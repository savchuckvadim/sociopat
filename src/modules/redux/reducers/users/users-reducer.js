const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
    users: [],
    pageSize: 9,
    totalUsersCount: 200,
    currentPage: 1

}

export const setCurrentPageActionCreator = (value) => {

    return {
        type: SET_CURRENT_PAGE,
        value
    }
}



// {
//     id:1,
//     name: 'Name',
//     surname: 'Surname',
//     login: 'Login',
//     followers:[],
//     following:[],
//     photo: 'https://images.unsplash.com/photo-1634498481594-e82257b5c59c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',

// }



const usersReducer = (state = initialState, action) => {
    let result = state

    switch (action.type) {
        case SET_CURRENT_PAGE:
            result = { ...state }
            result.currentPage = action.value
            console.log(result.currentPage)
            return result

        default:
            return result
    }

}

export default usersReducer