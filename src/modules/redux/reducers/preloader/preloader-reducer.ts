const IN_PROGRESS = 'IN_PROGRESS'

const initialState = {
    inProgress: false as boolean
}

export const inProgress = (bool: boolean): InProgressType =>  {
    
    return{ type: IN_PROGRESS, bool }
}

export type PreloaderStateType = typeof initialState

export type InProgressType = {
    type: typeof IN_PROGRESS,
    bool: boolean
}

const preloader = (state: PreloaderStateType = initialState, action: InProgressType): PreloaderStateType => {
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