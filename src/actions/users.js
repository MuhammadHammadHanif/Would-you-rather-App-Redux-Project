export const RECEIVE_USERS= 'RECEIVE_USERS'
export const SET_USER_ANSWER= 'SET_USER_ANSWER'
export const ADD_USER_QUESTION= 'ADD_USER_QUESTION'
export const ADD_USER= 'ADD_USER'

export const receiveUsers= (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const setUserAnswer= (authedUser, qid, answer) => {
    return {
        type: SET_USER_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export const addUsers= (author, id) => {
    return {
        type: ADD_USER,
        author,
        id
    }
}

export const addUserQuestion= (question) => {
    return {
        type: ADD_USER_QUESTION,
        question
    }
}