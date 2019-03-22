import React from 'react'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'
import AllQuestions from './AllQuestions'

const Dashboard = (props) => {

       const {unAnsweredQuestions, answeredQuestions, authenticatedUser} = props;
        const panes = [
            { menuItem: 'Unanswered Questions', render: () =>
                <Tab.Pane>
                    <AllQuestions 
                        questions={unAnsweredQuestions.sort((a, b) => (b.timestamp) - (a.timestamp))} 
                        type="unanswered" 
                        currentUserId={authenticatedUser[0].id} 
                    />
                </Tab.Pane> 
            },
            { menuItem: 'Answered Questions', render: () => 
                <Tab.Pane>
                    <AllQuestions 
                        questions={answeredQuestions.sort((a, b) => (b.timestamp) - (a.timestamp))} 
                        type="answered" 
                        currentUserId={authenticatedUser[0].id} 
                    />
                </Tab.Pane> 
            },
          ]
        return(
            <div className="ui raised very padded text container" style={{marginTop: "20px"}}>
               <Tab  panes={panes} />
            </div>
        )
}

const mapStateToProps= ({ questions, users, authenticatedUser }) => {
    let user
    let answeredQuestions = []
    let unAnsweredQuestions = []
    if (authenticatedUser[0].id !== "") {
        user = users[authenticatedUser[0].id]
    }
    Object.keys(questions).map(data => questions[data]).filter(question => {
      if (user.answers.hasOwnProperty(question.id)) {
        answeredQuestions.push(question)
      } else {
        unAnsweredQuestions.push(question)
      }
    })
    return {
        answeredQuestions,
        unAnsweredQuestions,
        authenticatedUser
    }
  }
  
  export default connect(mapStateToProps)(Dashboard)