const ACTION_TYPE = 'ACTION_TYPE';

let initialState = [

];

export const profileActionCreator = () => {
    return {
        type : ACTION_TYPE
    }
};

const profileReducer = (state = initialState, action) => {
    if (action.type === ACTION_TYPE) {

    }

    return state
};

export default profileReducer;