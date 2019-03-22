import React from 'react'
import NavBar from './NavBar'
import { connect } from 'react-redux'

const Header = (props) => {
    
    const { authenticatedUser } = props
    const checkAuth= Object.keys(authenticatedUser).length !== 0 ;
    console.log(checkAuth)
    return(
        <div>
        <div className="App-header">
        <h3 className="ui left floated header text">
            Would You Rather
        </h3>
        </div>
        {checkAuth && <NavBar />}
        </div>
    );
}

const mapStateToProps= ({authenticatedUser}) => {
    return {
        authenticatedUser
    }
  }
  
  export default connect(mapStateToProps)(Header)