const IN_PROGRESS = 'IN_PROGRESS'

const initialState = {
    inProgress: false as boolean
}

export const inProgress = (bool: boolean): InProgressType => ({ type: IN_PROGRESS, bool })

type InitialStateInProgressType = typeof initialState
type InProgressType = {
    type: typeof IN_PROGRESS,
    bool: boolean
}

const preloader = (state: InitialStateInProgressType = initialState, action: InProgressType) => {
    switch (action.type) {
        case IN_PROGRESS:

            if (state.inProgress !== action.bool) {
                return { ...state, inProgress: action.bool }
            }
            return state


        default:
            return state
    }
}

export default preloader