import React from 'react'
import { withRouter } from 'react-router-dom'
import { Progress } from 'semantic-ui-react'


const Answer= (props) => {
    const{userId, author, image, optionOne, optionTwo}= props.location.state;
    const checkUserVotesFromOptionOne=optionOne['votes'].includes(userId) 
    const userVotes= checkUserVotesFromOptionOne ? optionOne["votes"].length : optionTwo["votes"].length
    const otherVotes= !checkUserVotesFromOptionOne ? optionOne["votes"].length : optionTwo["votes"].length
    const totalVotes= optionOne["votes"].length + optionTwo["votes"].length
    const userPercentage = parseInt(userVotes / totalVotes * 100);
    const otherPercentage = parseInt(otherVotes / totalVotes * 100);
    const userText= checkUserVotesFromOptionOne ? optionOne["text"] : optionTwo["text"];
    const otherText= !checkUserVotesFromOptionOne ? optionOne["text"] : optionTwo["text"];
    
    return(
        <div className="ui raised very padded text container " style={{marginTop: "20px"}}>
        <div className="ui items segment">
            <h3 className="ui block header" style={{color: "black"}}>{`${author} asks:`}</h3>
            <div className="item">
                <div className="ui small circular image" style={{paddingTop: "60px"}}>
                    <img alt="user" src={image}/>
                </div>
                <div className="content">
                <div className="header">Results:</div>
                <div className="ui card" >
                <div className="content">
                    <i className="right floated like icon" style={{color:"red"}}></i>
                    <div className="description" style={{fontWeight:"bold", fontSize:"15px", color:"teal"}}>
                    {userText}
                    </div>
                    <div style={{marginTop: "10px"}}>
                        <Progress percent={userPercentage} progress color='green' />
                    </div>
                    <div className="ui center aligned" style={{marginTop:"-15px"}}>
                    <strong>{`${userVotes} out of ${totalVotes} votes`}</strong>
                    </div>
                </div>
                </div> 
                <div className="ui card">
                <div className="content">
                    <div className="description" style={{fontWeight:"bold", fontSize:"15px", color:"teal"}}>{otherText}</div>
                    <div style={{marginTop: "10px"}}>
                        <Progress percent={otherPercentage} progress color='green' />
                    </div>
                    <div className="ui center aligned" style={{marginTop:"-15px"}}>
                    <strong>{`${otherVotes} out of ${totalVotes} votes`}</strong>
                    </div>
                </div>
                </div> 
                </div>
            </div>
        </div>
   </div>
    )
}

export default (withRouter(Answer))