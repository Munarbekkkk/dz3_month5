export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD'
export const SET_ERROR = 'SET_ERROR'
export const CLEAR_ERROR = 'CLEAR_ERROR'

export const setPassword = (password) => ({
    type: SET_PASSWORD,
    payload: password
})

export const setConfirmPassword = (confirmPassword) => ({
    type: SET_CONFIRM_PASSWORD,
    payload: confirmPassword
})

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error
})

export const clearError = () => ({
    type: CLEAR_ERROR,
})

