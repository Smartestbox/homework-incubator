import {UserType} from '../HW8'

type ActionType =
    { type: 'sort'; payload: 'up' | 'down' } |
    { type: 'check'; payload: number }


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    const stateCopy = state.map(el => ({...el}))

    switch (action.type) {
        case 'sort':  // by name
            return action.payload === 'up' ?
                stateCopy.sort((a,b) => {
                    if(a.name > b.name){
                        return 1
                    } else if(a.name < b.name) {
                        return -1
                    } else {
                        return 0
                    }
                }) :
                stateCopy.sort((a,b) => {
                    if(a.name > b.name){
                        return -1
                    } else if(a.name < b.name) {
                        return 1
                    } else {
                        return 0
                    }
                })
        case 'check':
            return stateCopy.filter(el => el.age >= action.payload) // need to fix
        default:
            return state
    }
}
