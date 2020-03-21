import React, { Component } from "react";
import { Redirect, withRouter } from 'react-router-dom';
import './NavBar.css';
import loginController from '../../controllers/LoginController';
import { Modal } from 'react-bootstrap';

class NavBar extends Component {
  state = {
    username: "",
    password: "",
    error: null,
    loggedIn: false,
    user: null,
    showPassword: false,
  }
  login = (e) => {
    e.preventDefault();

    loginController.login(this.state.username, this.state.password, (err, user) => {

      if (err) {
        this.handleShow()
      } else {
        this.props.history.push("/app");
      }
    });
  }

  Home = () =>{
    this.props.history.push("/");
  }
  Bio = () =>{
    window.location.pathname = '/bio'
  }
  MyWork = () => {
    window.location.pathname = '/myWork'
  }
  Contact = () => {
    window.location.pathname = '/contact'
  }

  forgotPassword = () => {
    this.setState({ showPassword: true });
  }
  closePassword = () => {
    this.setState({ showPassword: false });
  }
  inputChanged = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleClose = () => {
    this.setState({ show: false });
  }
  handleShow = () => {
    this.setState({ show: true });
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/app" />;
    }
    return (
      <div id='NavBody'>
        <form onSubmit={this.login}>
          <div className="form-group" id="sign-up-form">
            <div className="row" id='navRow'>
              <div className="col-md-2" style={{marginLeft: 30}} onClick={this.Home}><img id='navLogo'src="images/ATCLogo.jpg" alt='shop' /></div>

              <div className="col-md-1" id='widget'>
                <div class="btn-group">
                  <button type="button" class="navButton" ><p className="navTabsTop">Home</p></button>
                </div>
              </div>
              <div className="col-md-1" id='widget'>
                <div class="btn-group">
                  <button type="button" class="navButton" onClick={this.MyWork} ><p className="navTabsTop">My Work</p></button>
                </div>
              </div>
              <div className="col-md-1" id='widget'>
                <div class="btn-group">
                  <button type="button" class="navButton" onClick={this.Bio} ><p className="navTabsTop">Bio</p></button>
                </div>
              </div>
              <div className="col-md-1" id='widget'>
                <div class="btn-group">
                  <button type="button" class="navButton" onClick={this.Contact} ><p className="navTabsTop">Contact</p></button>
                </div>
              </div>
              <div className="col-md-1.5"><input type="email" className=" login-input" id="login-email" placeholder="Username" name="username" onChange={this.inputChanged} /></div>
              <div className="col-md-1.5"><input type="password" className=" login-input" id="login-password" placeholder="Password" name="password" onChange={this.inputChanged} /> <button type="button" id="btn-forgotPass" onClick={this.forgotPassword} value="Login">?</button></div>
              <button type="button" id="btn-id" onClick={this.login} value="Login"><img id='signInBtn' src="images/signInImg.jpg" alt='shop'/></button>
            </div>
          </div>
        </form>
        <Modal show={this.state.showPassword} onHide={this.closePassword}>
          <Modal.Header closeButton>
            <Modal.Body>
              <div>
                <h5 className='row'>Forgot Password?</h5>
              </div>
            </Modal.Body>
          </Modal.Header>
        </Modal>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Body>
              <div>
                <h5 className='row'>Missing or invalid credentials. Cannot log in.</h5>
              </div>
            </Modal.Body>
          </Modal.Header>
        </Modal>
      </div>
    );
  }
};

export default withRouter(NavBar);