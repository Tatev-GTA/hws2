const initState = {
    themeId: 1,
}

// Սահմանում ենք State-ի տիպը
export type ThemeState = typeof initState

// Սահմանում ենք Action-ի տիպը
export type ChangeThemeAction = {
    type: 'SET_THEME_ID'
    id: number
}

// Ռեդյուսերը՝ ճիշտ տիպերով
export const themeReducer = (state: ThemeState = initState, action: ChangeThemeAction): ThemeState => {
    switch (action.type) {
        // Լրացնում ենք լոգիկան
        case 'SET_THEME_ID': {
            return {
                ...state,
                themeId: action.id, // Թարմացնում ենք themeId-ն action-ի արժեքով
            }
        }

        default:
            return state
    }
}

// Action Creator-ը՝ ճիշտ վերադարձվող տիպով
export const changeThemeId = (id: number): ChangeThemeAction => ({
    type: 'SET_THEME_ID',
    id
})