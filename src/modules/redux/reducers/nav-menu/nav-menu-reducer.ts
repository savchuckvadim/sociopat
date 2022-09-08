

let initialState = [
    {
        name: 'Profile',
        link: 'profile',

    },
    {
        name: 'Messages',
        link: 'messages',

    },
    {
        name: 'People',
        link: 'users',


    },


]
export type NavMenuStateType = typeof initialState

const navMenuReducer = (state: NavMenuType = initialState, action: any): NavMenuType => {
    return state
}

export default navMenuReducer