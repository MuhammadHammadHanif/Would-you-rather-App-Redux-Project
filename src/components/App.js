import React, { Component } from 'react';
import { connect } from 'react-redux'
import {handleInitialData} from '../actions/combine'
import Login from './Login'
import { Route, Switch, Redirect } from 'react-router-dom'
import Header from './Header'
import Answer from './Answer'
import Question from './Question'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import Leaderboard from './LeaderBoard' 
import Signup from './Signup'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    const {authenticatedUser}= this.props

    const ProtectedRoute = ({ isAllowed, ...props }) => { 
      return (
     isAllowed ? 
     <Route {...props}/> 
     : <Redirect  
     to={{
          pathname: "/",
          state: { from: props.location }
      }} 
    />
      )
    }
    const checkAuth= Object.keys(authenticatedUser).length !== 0 ;
    return (
          <div>
            <Header />
                <Switch>
                    <Route 
                        path="/" 
                        render={() => <Login />} 
                        exact={true} 
                    />
                    <Route 
                        path="/signup" 
                        render={() => <Signup />} 
                        exact={true} 
                    />
                    <ProtectedRoute
                        isAllowed={checkAuth} 
                        exact={true}
                        path="/dashboard" 
                        component={Dashboard}  
                    />
                    <ProtectedRoute
                        isAllowed={checkAuth} 
                        exact={true}
                        path="/answers/:answer_id" 
                        component={Answer}  
                    />
                    <ProtectedRoute
                        isAllowed={checkAuth} 
                        exact={true}
                        path="/questions/:question_id"
                        component={Question}  
                    />
                    <ProtectedRoute
                        isAllowed={checkAuth} 
                        exact={true}
                        path="/new_question" 
                        component={NewQuestion}  
                    />
                    <ProtectedRoute
                        isAllowed={checkAuth} 
                        exact={true}
                        path="/leaderboard" 
                        component={Leaderboard}  
                    />
                </Switch>
                </div>
    )
  }
}

const mapStateToProps= ({authenticatedUser}) => {
  return {
      authenticatedUser
  }
}

export default connect(mapStateToProps)(App)
