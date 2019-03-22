export const SET_AUTHENTICATED_USER= 'SET_AUTHENTICATED_USER'

export const setAuthenticatedUser= (currentUser) => {
    return {
        type: SET_AUTHENTICATED_USER,
        currentUser
    }
}
