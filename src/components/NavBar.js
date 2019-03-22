import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { setAuthenticatedUser } from "../actions/authenticatedUser";
import { connect } from 'react-redux'


class NavBar extends Component {
    state = { activeItem: 'Home' }
    handleItemClick = (e, { name }) => {
      const {dispatch} = this.props
      this.setState({ activeItem: name })
      if(name === "logout")
      {
        dispatch(setAuthenticatedUser(''))
      }
    }
    render()
    {
       const { activeItem } = this.state
       const {avatar, userName}= this.props
    return (
      <div className="ui container" style={{marginTop:"5px"}}>
        <Menu pointing secondary>
          <Link to="/dashboard">
            <Menu.Item 
                name='Home' 
                active={activeItem === 'Home'} 
               onClick={this.handleItemClick} 
            />
          </Link>
          <Link to="/new_question">
            <Menu.Item
                name='New Question'
                active={activeItem === 'New Question'}
                onClick={this.handleItemClick}
            />
          </Link>
          <Link to="/leaderboard">
          <Menu.Item
            name='Leader Board'
            active={activeItem === 'Leader Board'}
            onClick={this.handleItemClick}
          />
          </Link>
          <Menu.Menu position='right'>
          <span style={{marginTop:"8px", marginRight:"8px"}}>Hello, <strong style={{color:"teal"}}>{userName}</strong></span>
          <img alt="user" className="ui avatar circular image" src={avatar} style={{marginTop:"4px"}}/>
          
          <Link to="/">
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
             </Link>
          </Menu.Menu>
         
        </Menu>
      </div>
    )
    }
}

const mapStateToProps= ({authenticatedUser}) => {
  return {
      avatar: authenticatedUser[0].avatarURL,
      userName: authenticatedUser[0].name
  }
}

export default connect(mapStateToProps)(NavBar)