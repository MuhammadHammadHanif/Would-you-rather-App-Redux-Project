import { getInitialData } from '../utils/helper'
import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { receiveUsers, setUserAnswer, addUserQuestion } from "./users";
import { receiveQuestions, setUserQuestion, addQuestion } from './questions';

export const handleInitialData = () => {
    return (dispatch) => {
        getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
        })
    }
}

export const insertUserAnswer= (authedUser, qid, answer) => {
    const data = {
      authedUser,
      qid,
      answer
    }
    return (dispatch) => {
        _saveQuestionAnswer(data)
        .then(() => {
          dispatch(setUserAnswer(authedUser, qid, answer))
          dispatch(setUserQuestion(authedUser, qid, answer))
        })
    }
}

export const insertUserQuestion= (optionOneText, optionTwoText, author) => {
  const data = {
    optionOneText,
    optionTwoText,
    author
  }
  return (dispatch) => {
    console.log(data)
      _saveQuestion(data)
      .then((data) => {
       
        dispatch(addUserQuestion(data))
        dispatch(addQuestion(data))
      })
  }
  
}
