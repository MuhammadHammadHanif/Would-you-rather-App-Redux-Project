import { combineReducers } from 'redux';
import { users } from "./users";
import { authenticatedUser } from "./authenticatedUser";
import { questions } from "./questions";

export default combineReducers({
    authenticatedUser,
    users,
    questions
})