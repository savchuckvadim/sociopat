
const CHANGE_CURRENT_POST = 'CHANGE_CURRENT_POST';

const initialState = {
    value: ''
}

export const changeCurrentPostActionCreator = (value) => {

    return {
        type: CHANGE_CURRENT_POST,
        value: value
    }
}


const changeCurrentPostReducer = (state = initialState, action) => {
    let result = state;

    if (action.type === CHANGE_CURRENT_POST) {
        result = {
            ...state
        }
        result.value = action.value
    }

    return result
};

export default changeCurrentPostReducer