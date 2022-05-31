import { fishAPI, usersAPI } from "../../../services/api";

const DIALOGS = 'DIALOGS';
const SET_DIALOGS = 'SET_DIALOGS'

const initialState = {
    dialogs: []
}

const setDialogs = (dialogs) => ({ type: SET_DIALOGS, dialogs })



const getMessages = async () => {

    let toFrom = () => {

        return Math.floor(Math.random() * 3)
    }
    let send = () => {
        if (toFrom() === 1) {
            return 'to'
        }
        return 'from'
    }
    let messages = []
    let fishes = await fishAPI.get()
    messages = fishes.split('.', 5)


    let returnedMessages = messages.map(m => (
        {
            send: send(),
            message_body: m
        }
    ))
    return returnedMessages
}
export const getDialogs = () => async (dispatch) => {
    let users = await usersAPI.getUsers()
    let messages = await getMessages()

    let dialogs = await users.items.map((u, i) => {


        return {
            id: i,
            userId: u.id,
            nameOfDialog: u.name,
            iconOfDialog: u.photos.small,
            messages: messages
        }
    })
    dispatch(setDialogs(dialogs))


}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_DIALOGS:
            let resultState = { ...state }
            resultState.dialogs = action.dialogs

            return resultState
        default:
            return state;
    }

}

export default dialogsReducer;

