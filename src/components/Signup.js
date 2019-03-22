import React,{Component} from 'react'
import { connect } from 'react-redux'
import { addUsers } from "../actions/users";
import { withRouter, Link } from 'react-router-dom'

class Signup extends Component {

    state={
        username: ""
    }
    onInputChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState(() => {
         return{
                [name] : value
            };
        })
    }
    onFormSubmit= (e) => {
        e.preventDefault()
        const { username }= this.state;
        const { dispatch } = this.props
        const userId = username.replace(' ', '').toLowerCase()
        console.log(userId)
        dispatch(addUsers(userId,username ))
        this.setState(() => ({
            username: ""
        }))
    
    }

    render(){

    return(
       <div>
        <div className="ui container" style={{marginTop:"-50px"}}>
            <div className="ui center aligned grid" >
            <div className="column">
                <h3 style={{color:"black"}} className="ui header" >
                Welcome to the Would You Rather App!
                </h3>
                <form className="ui large form" onSubmit={this.onFormSubmit} autoComplete="off">
                <div className="ui stacked segment">
                <div style={{marginTop:"10px", marginBottom:"10px"}}><i  className="teal massive user circle icon"></i></div>
                <h2 className="ui teal image header">
                Sign in
                </h2>
                <div className="field">
                    <div className="ui left icon input">
                        <i className="user icon"></i>
                        <input 
                        onChange={this.onInputChange}
                        className="text"
                        type="text"
                        name="username"
                        placeholder="User Name"
                        value={this.state.username}
                        />
                    </div>
                    </div>
                        <button className="ui fluid large teal submit button ui vk button" >
                            Sign in
                        </button>  
                </div>
                </form>
                <h5 style={{color:"black", marginTop:"15px"}} className="ui header" >
                <Link to="/" style={{color:"black"}}>Back To Login Page</Link>
                </h5>
            </div>
            </div>
        </div>
       </div>
    )
}}

export default connect()(withRouter(Signup))