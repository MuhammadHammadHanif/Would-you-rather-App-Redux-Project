import { RECEIVE_USERS, SET_USER_ANSWER, ADD_USER_QUESTION, ADD_USER } from "../actions/users";

export const users= (state= {}, action) => {
    switch(action.type)
    {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case SET_USER_ANSWER:
            return {
              ...state,
              [action.authedUser]: {
                ...state[action.authedUser],
                answers: {
                  ...state[action.authedUser].answers,
                  [action.qid]: action.answer
                }
              }
            }
        case ADD_USER_QUESTION:
            return {
              ...state,
              [action.question.author]: {
                ...state[action.question.author],
                questions: [...state[action.question.author].questions, action.question.id]
              }
            }
        case ADD_USER:
            return {
              ...state,
              [action.id]: {
                id: action.id,
                name: action.author,
                avatarURL: "https://img.icons8.com/plasticine/100/000000/user-male.png",
                answers: {},
                questions: []
              }
            }
        default:
            return state
    }
}