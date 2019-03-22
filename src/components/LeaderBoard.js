import React from 'react'
import { connect } from 'react-redux';

const LeaderBoard= (props) => {
    const {users}= props;
    return(
        <div className="ui container center aligned grid  " style={{ marginTop:"10px"}}>
            <div>
            {
                Object.values(users).map(user =>
                    <div className="ui segment" key={user.id} style={{ marginTop:"10px"}}>
                    <h3 style={{color: "black", marginBottom:"-10px", textAlign:"left"}}>{user.name} Profile</h3>
                        <div className="ui  items">
                            <div className="item">
                                <div className="ui tiny circular image" style={{marginTop:"42px"}}>
                                    <img alt="user" src={user.avatarURL}/>
                                </div>
                                <div className="content">
                                <div className="description">
                                <div><strong>Answered Questions <span className="circular teal ui icon button" style={{marginLeft:"5px"}}>{Object.keys(user.answers).length}</span></strong></div>
                                <br />
                                <div><strong>Created Questions <span className="circular teal ui icon button" style={{marginLeft:"18px"}}>{user.questions.length}</span></strong></div>
                                <br />
                                <div><strong>Total Scores <span className="circular google plus ui icon button " style={{marginLeft:"58px"}}>{Object.keys(user.answers).length + user.questions.length}</span></strong></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )
          }
        </div>
        </div>
    )
}

const mapStateToProps= ({users}) => {
    return {
        users
    }
  }

export default connect(mapStateToProps)(LeaderBoard)