const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_ITEMS_COUNT = 'SET_TOTAL_ITEMS_COUNT'

const initialState = {

    pageSize: 21 as number,
    totalItemsCount: 1 as number,
    currentPage: 1 as number,
    portionSize: 10 as number,
    currentPortion: 1 as number

}
type InitialStateType = typeof initialState


//ACTION CREATORS
export const setCurrentPage = (page: number, portion: number): SetCurrentPageType => ({ type: SET_CURRENT_PAGE, page, portion })
type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    page: number
    portion: number
}

export const setTotalItemsCount = (count: number): SetTotalItemsCountType => ({ type: SET_TOTAL_ITEMS_COUNT, count })

type SetTotalItemsCountType = {
    type: typeof SET_TOTAL_ITEMS_COUNT
    count: number

}


//THUNKS


//REDUCER
const paginatorReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    let result = state

    switch (action.type) {
        case SET_CURRENT_PAGE:
            result = { ...state }
            result.currentPage = action.page
            result.currentPortion = action.portion
            return result

        case SET_TOTAL_ITEMS_COUNT:
            result = { ...state }
            result.totalItemsCount = action.count
            return result

        default:
            return result

    }

}
export default paginatorReducer