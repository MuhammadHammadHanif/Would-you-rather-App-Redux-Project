import React, {Component} from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { insertUserAnswer } from "../actions/combine";

class Question extends Component {
    state = {
        selected: ""
    }
    handleChange = (e) => {
        const {value} = e.target;
        this.setState(() => ({
            selected:value
        }))
    }
    onButtonClick=(e)=> {
        e.preventDefault()
        const{userId,quesId}=this.props.location.state;
        const{dispatch}=this.props;
        const {selected} = this.state;
        dispatch(insertUserAnswer(userId, quesId, selected))
        console.log(this.state.selected)
    }
    render()
    {
        const{author, image, optionOne, optionTwo}=this.props.location.state;
        return(
            <div className="ui raised very padded text container" style={{marginTop: "20px"}}>
                    <div className="ui items">
                        <h3 className="ui block header" style={{color: "black"}}>{`${author} asks:`}</h3>
                        <div className="item segment">
                            <div className="ui small circular image">
                                <img alt="user" src={image}/>
                            </div>
                            <div className="content">
                            <div className="header" style={{marginBottom:"5px"}}>Would you rather</div>
                            <div className="description">
                            <form className="ui form">
                            <div className="grouped fields">
                                <div className="field">
                                <div className="ui radio checkbox">
                                    <input value="optionOne" id="radio1" type="radio" name="example2" onClick={this.handleChange} />
                                    <label style={{cursor:"pointer"}} htmlFor="radio1">{optionOne["text"]}</label>
                                </div>
                                </div>
                                <div className="field">
                                <div className="ui radio checkbox">
                                    <input value="optionTwo" id="radio2" type="radio" name="example2" onClick={this.handleChange}/>
                                    <label style={{cursor:"pointer"}} htmlFor="radio2">{optionTwo["text"]}</label>
                                </div>
                                </div>
                            </div>
                            </form>
                            </div>
                            <div style={{marginTop:"10px"}} >
                                <button className="positive ui button" onClick={this.onButtonClick} style={{width:"160px"}}><Link to="/dashboard" style={{color:"white"}}>Submit</Link></button>
                            </div>
                            </div>
                        </div>
                    </div>
             </div>
        )
    }
}

export default connect()(withRouter(Question))