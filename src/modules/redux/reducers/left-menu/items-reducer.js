const LEFT_ITEMS = 'LEFT_ITEMS';

let initialState = {
    namesOfLink: ['/profile', '/messages', '/users'],
    namesOfItems: ['Profile', 'Messages', 'Users']
};

export const itemsActionCreator = () => {
    return {
        type: LEFT_ITEMS
    }
};

const itemsReducer = (state = initialState, action) => {
    if (action.type === LEFT_ITEMS) {

    }

    return state
};

export default itemsReducer;