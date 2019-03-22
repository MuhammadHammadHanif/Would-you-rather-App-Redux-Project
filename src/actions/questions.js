export const RECEIVE_QUESTIONS= 'RECEIVE_QUESTIONS'
export const SET_USER_QUESTION= 'SET_USER_QUESTION'
export const ADD_QUESTION= 'ADD_QUESTION'

export const receiveQuestions= (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export const setUserQuestion= (authedUser, qid, answer) => {
    return {
        type: SET_USER_QUESTION,
        authedUser,
        qid,
        answer
    }
}

export const addQuestion= (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
}

