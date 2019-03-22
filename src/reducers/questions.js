import { RECEIVE_QUESTIONS, SET_USER_QUESTION, ADD_QUESTION } from "../actions/questions";

export const questions= (state= {}, action) => {
    switch(action.type)
    {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SET_USER_QUESTION:
            return {
                    ...state,
                    [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        case ADD_QUESTION:
            return {
                    ...state,
                    [action.question.id]: action.question
            }
            
        default:
            return state
    }
}