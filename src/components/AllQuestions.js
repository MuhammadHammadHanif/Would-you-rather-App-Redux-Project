import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class  AllQuestions extends Component  {
    
    render()
    {
        const {users, questions, type, currentUserId}= this.props;
        return(
            <div>
                {
                questions.map(question => Object.values(users)
                .map(user => question.author === user.id 
                && <div className="ui  segment" key={question.id} style={{marginBottom:"12px", marginTop:"5px"}}>
                        <div className="ui items">
                            <h3 className="ui block header" style={{color: "black"}}>{`${user.name} asks:`}</h3>
                            <div className="item">
                                <div className="ui tiny image">
                                    <img alt="user" src={user.avatarURL}/>
                                </div>
                                <div className="content">
                                <div className="header">Would you rather</div>
                                <div className="description">
                                    <p>{`... ${question.optionOne['votes'].includes(user.id) ? question.optionOne.text : question.optionTwo.text} ...`}</p>
                                </div>
                                <Link to={{ 
                                    pathname: type==="answered" ?  `/answers/:${question.id}` : `/questions/:${question.id}`, 
                                    state: {
                                        userId: currentUserId,
                                        quesId: question.id,
                                        author: user.name,
                                        image: user.avatarURL,
                                        optionOne: question.optionOne,
                                        optionTwo: question.optionTwo,
                                    } 
                                }}>
                                    <div style={{marginTop:"10px"}} >
                                        <button className="ui inverted primary button">View Poll</button>
                                    </div>
                                </Link>
                               
                                </div>
                            </div>
                        </div>
                   </div>
                ))
                }
            </div>
        )
    }
}

const mapStateToProps= ({users}) => {
    return{
    users
    }
}

export default connect(mapStateToProps)(AllQuestions)