import { SET_AUTHENTICATED_USER } from "../actions/authenticatedUser";

export const authenticatedUser= (state= {}, action) => {
    switch(action.type)
    {
        case SET_AUTHENTICATED_USER:
            return action.currentUser
        default:
            return state
    }
}