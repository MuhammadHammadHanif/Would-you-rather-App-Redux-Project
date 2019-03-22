import React,{Component} from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import { setAuthenticatedUser } from "../actions/authenticatedUser";
import { withRouter, Redirect, Link} from 'react-router-dom'

class Login extends Component {

    state={
        userName: null,
        redirectToRequest: false
    }
    handleChange= (e, data) => {
        const { value } = data;
        this.setState(() => ({
            userName: value
        }))
    }
    onFormSubmit= (e) => {
        e.preventDefault()
        const {userName}= this.state;
        if(userName === null)
        {
            alert('Select User Name')
        }
        else
        {
            const { userName }= this.state
            const { dispatch, users }= this.props
            const currentUser = Object.values(users).filter(user => user.name === userName)
            dispatch(setAuthenticatedUser(currentUser))
            this.setState(() => ({
                userName: null,
                redirectToRequest : true
            }))

            
        }
    }

    render(){
        const { from } = this.props.location.state || { from: { pathname: '/dashboard' } }
        const { redirectToRequest } = this.state
        if (redirectToRequest === true) {
        return <Redirect to={from} />
        }
        let userLogins = [];
        Object.values(this.props.users).map((data, i) =>
        userLogins.push({ 
            key: data.id, 
            text: data.name, 
            value: data.name,
            image: { avatar: true, src: data.avatarURL }
        }))
    return(
       <div>
        <div className="ui container" style={{marginTop:"-50px"}}>
            <div className="ui center aligned grid" >
            <div className="column">
                <h3 style={{color:"black"}} className="ui header" >
                Welcome to the Would You Rather App!
                </h3>
                <form className="ui large form" onSubmit={this.onFormSubmit}>
                <div className="ui stacked segment">
                <div style={{marginTop:"10px", marginBottom:"10px"}}><i  className="teal massive user circle icon"></i></div>
                <h2 className="ui teal image header">
                Login
                </h2>
                    <div className="field">
                    <Dropdown 
                        selection 
                        fluid
                        options={userLogins} 
                        onChange={this.handleChange} 
                        value={userLogins.value} 
                        key={userLogins.key} 
                        name="selectCustomer" 
                        placeholder='Select User' 
                    />
                    </div>
                        <button className="ui fluid large teal submit button ui vk button" >
                            Login
                        </button>  
                </div>
                </form>
               
            </div>
            </div>
        </div>
       </div>
    )
}}

const mapStateToProps= ({users}) => {
    return {
        users
    }
}

export default connect(mapStateToProps)(withRouter(Login))