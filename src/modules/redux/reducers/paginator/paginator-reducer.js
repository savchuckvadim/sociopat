const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_ITEMS_COUNT = 'SET_TOTAL_ITEMS_COUNT';

const initialState = {

    pageSize: 21,
    totalItemsCount: 1,
    currentPage: 1,
    portionSize: 10,
    currentPortion: 1

}


//ACTION CREATORS
export const setCurrentPage = (page, portion) => ({ type: SET_CURRENT_PAGE, page, portion });
export const setTotalItemsCount = (count) => ({ type: SET_TOTAL_ITEMS_COUNT, count });



//THUNKS


//REDUCER
const paginatorReducer = (state = initialState, action) => {
    let result = state

    switch (action.type) {
        case SET_CURRENT_PAGE:
            result = { ...state };
            result.currentPage = action.page;
            result.currentPortion = action.portion;
            return result;

        case SET_TOTAL_ITEMS_COUNT:
            result = { ...state };
            result.totalItemsCount = action.count;
            return result;

        default:
            return result;

    }

};
export default paginatorReducer;