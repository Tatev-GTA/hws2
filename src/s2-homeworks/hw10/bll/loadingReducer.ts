// loadingReducer.ts

// 1. Константа для типа действия
const SET_LOADING = 'loading/SET_LOADING';

// 2. Тип для состояния
export type LoadingState = {
    isLoading: boolean;
}

const initState: LoadingState = {
    isLoading: false,
};

// 3. Исправленный тип действия
export type LoadingActionType = {
    type: typeof SET_LOADING
    isLoading: boolean
}

// 4. Логика в Reducer и фикс any
export const loadingReducer = (state: LoadingState = initState, action: LoadingActionType): LoadingState => {
    switch (action.type) {
        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading, // Устанавливаем значение из action
            }
        }
        default:
            return state
    }
}

// 3. Исправленный Action Creator
export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: SET_LOADING,
    isLoading,
});