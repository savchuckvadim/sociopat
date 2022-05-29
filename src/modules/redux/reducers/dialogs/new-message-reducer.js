const NEW_MESSAGE = 'NEW_MESSAGE';

const initialState = {
    messageBody: ''
};


export const sendNewMessage = (messageBody) => {

    return {
        type: NEW_MESSAGE,
        messageBody: messageBody,


    }
};


const newMessageReducer = (state = initialState, action) => {

    let result = state
    switch (action.type) {
        case NEW_MESSAGE:
            result = { ...state }
            result.messageBody = action.messageBody
            return result
        default:
            return result
    }

}

export default newMessageReducer;