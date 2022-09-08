const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_ITEMS_COUNT = 'SET_TOTAL_ITEMS_COUNT';

const initialState = {
    
    pageSize: 21,
    totalItemsCount: 1,
    currentPage: 1,
    portionSize: 10,

}


//ACTION CREATORS
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalItemsCount = (count) => ({ type: SET_TOTAL_ITEMS_COUNT, count });



//THUNKS
// export const requestUsers = (currentPage, pageSize) => async (dispatch) => {

//     dispatch(fetching(true))
//     let res = await usersAPI.getUsers(currentPage, pageSize)
//     const users = res.data;
//     dispatch(setTotalUsersCount(res.meta.total))
//     dispatch(setUsers(users))
//     dispatch(fetching(false))

// };

//REDUCER
const paginatorReducer = (state = initialState, action) => {
    let result = state

    switch (action.type) {
        case SET_CURRENT_PAGE:
            result = { ...state };
            result.currentPage = action.page;
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