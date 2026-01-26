import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': { // by name
            return [...state].sort((a, b) => {
                if (action.payload === 'up') {
                    // в алфавитном порядке a.name > b.name
                    return a.name.localeCompare(b.name)
                } else {
                    // в обратном порядке a.name < b.name
                    return b.name.localeCompare(a.name)
                }
            })
        }
        case 'check': {
            // совершеннолетние
            return state.filter(user => user.age >= action.payload)
        }
        default:
            return state
    }
}