type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

type InitStateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false,
}

export const loadingReducer = (state: InitStateType = initState, action: LoadingActionType): InitStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING':
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
