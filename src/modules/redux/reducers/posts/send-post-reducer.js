
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




const currentPostReducer = (state = initialState, action) => {
    let result = state;

    switch (action.type) {
        case CHANGE_CURRENT_POST:

            result = {
                ...state
            }
            result.value = action.value
            return result


        case  ADD_POST:
            result = {
                ...state
            }
            result.value = ''
            return result
        default:
            return result
    }

};

export default currentPostReducer