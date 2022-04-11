
const CHANGE_CURRENT_POST = 'CHANGE_CURRENT_POST';
const ADD_POST = 'ADD_POST'
const initialState = {
    value: ''
};

export const changeCurrentPostActionCreator = (value) => {

    return {
        type: CHANGE_CURRENT_POST,
        value: value
    }
};




const changeCurrentPostReducer = (state = initialState, action) => {
    let result = state;

    if (action.type === CHANGE_CURRENT_POST) {
        result = {
            ...state
        }
        result.value = action.value
    } else if (action.type === ADD_POST) {
        result = {
            ...state
        }
        result.value = ''
    }

    return result
};

export default changeCurrentPostReducer