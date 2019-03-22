import React, {Component} from 'react'
import { connect } from 'react-redux'
import { insertUserQuestion} from '../actions/combine'
import { withRouter } from 'react-router-dom'

class  NewQuestion extends Component {
    
    state={
        optionOne: "",
        optionTwo: ""
    }

    onChange=(e) => {
        const {name, value}= e.target;
        this.setState(() => ({
            [name]:value
        }))
    }

    onSubmit= (e) => {
        e.preventDefault();
        const { dispatch, authenticatedUser } = this.props
        const { optionOne , optionTwo } = this.state
        console.log(authenticatedUser[0].id, optionOne, optionTwo)
        dispatch(insertUserQuestion(optionOne, optionTwo, authenticatedUser[0].id))
        this.setState(() => ({
            optionOne:"",
            optionTwo:""
        }))
        alert('New Question Is Created !!!')
        this.props.history.push('/dashboard')
    }

    render()
    {
        return(
            <div>
                <div className="ui container" style={{marginTop: "45px"}}>
                <div className="ui middle aligned center aligned grid">
                
                <div style={{textAlign:"center"}}>
                    <h2 >
                    Create New Question
                    </h2>
                    <form className="ui large form" onSubmit={this.onSubmit} autoComplete="off">
                    <div className="ui stacked segment">
                        <h3  style={{textAlign:"left"}}>
                        <strong>Would you rather</strong>
                        </h3>
                        <div className="field">
                        <input 
                          type="text" 
                          name="optionOne" 
                          value={this.state.optionOne} 
                          placeholder="Option One" 
                          style={{marginBottom:"10px"}}
                          onChange={this.onChange}
                        />
                        <span><strong>OR</strong></span>
                        <input 
                          type="text" 
                          name="optionTwo" 
                          value={this.state.optionTwo}  
                          placeholder="Option Two" 
                          style={{marginTop:"10px"}}
                          onChange={this.onChange}
                        />
                        </div>
                        <button className="ui fluid large teal submit button ui vk button" >
                        Submit
                        </button>  
                    </div>
                    </form>
                </div>
                </div>
                </div>
           </div>
        )
    }
     
}

const mapStateToProps= ({authenticatedUser}) => {
    return {
        authenticatedUser
    }
}

export default connect(mapStateToProps)(withRouter(NewQuestion))