import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './NavId.css';
import loginController from "../../controllers/LoginController"

class NavId extends Component {
    state = {
        user: null,
        loggedIn: true
    }
    logout = event => {
        this.setState({ loggedIn: false });
        loginController.logout();
    }
    componentDidMount() {
        loginController.addUserChangedListener(this.setUser);
        loginController.recheckLogin();
    }
    componentWillUnmount() {
        loginController.removeUserChangedListener(this.setUser);
    }
    setUser = (user) => {
        this.setState({ user: user });
    }
    render() {
        return (
            <div>
                <div className='row' id="navBar">
                    <div className='col-md-5' id="title"><h2>Max Bone</h2></div>
                    <div className="col-md-1" />
                    <div className='col-md-3' id="welcome-text"> {this.state.user ? <div>Welcome {this.state.user.user.firstName}!</div> : null}</div>
                    <Link className="sign-out" to="/"><button type="button" className="btn btn-light" id="signout" onClick={this.logout} value="Log out">Log out</button></Link>
                    <div className='col-md-1' />
                </div>
            </div>
        );
    }
};

export default NavId;