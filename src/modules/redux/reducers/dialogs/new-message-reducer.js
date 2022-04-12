const NEW_MESSAGE = 'NEW_MESSAGE';

const initialState = {
    messageBody: ''
};


export const newMessageActionCreator = (messageBody) => {

    return {
        type: NEW_MESSAGE,
        messageBody: messageBody,
        nameOfButton: 'отправить сообщение'

    }
};


const newMessageReducer = (state = initialState, action) => {

    let result = state
    if (action.type === NEW_MESSAGE) {
        result = { ...state }
        result.messageBody = action.messageBody
       
    }
    return result
}

export default newMessageReducer;