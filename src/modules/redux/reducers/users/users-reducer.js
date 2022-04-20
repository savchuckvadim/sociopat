
const initialState = [
    {
        id:1,
        name: 'Name',
        surname: 'Surname',
        login: 'Login',
        followers:[],
        following:[],
        photo: 'https://images.unsplash.com/photo-1634498481594-e82257b5c59c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        
    }
]


const usersReducer = (state=initialState, action) => {

    return state
}

export default usersReducer