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
  Sales = () =>{
    window.scrollTo(0,1650)
  }
  Production= () => {
    window.scrollTo(0, 2150)
  }
  MarketingPR = () => {
    window.scrollTo(0, 1020)
  }
  Design = () => {
    window.scrollTo(0, 2150)
  }
  TradeShow = () => {
    window.scrollTo(0, 2700)
  }
  PopUp = () => {
    window.scrollTo(0, 2700)
  }
  ShippingLogistics = () => {
    window.scrollTo(0, 3400)
  }
  Home = () =>{
    this.props.history.push("/");
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
                    <button type="button" id='dropDownButton' class="navButton dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><p className="navTabsTop">Home</p></button>
                   <div class="dropdown-menu" id='dropMenu'>
                      <div class="dropdown-item" id='dropItem' onClick={this.Sales}>Scroll</div>
                       <div class="dropdown-divider" id='dropDivider'></div>
                    <div class="dropdown-item" id='dropItem' onClick={this.SalesPage}>View More</div>
                    </div>
                  </div>
              </div>
              <div className="col-md-1" id='widget'>
                <div class="btn-group">
                  <button type="button" id='dropDownButton' class="navButton dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><p className="navTabsTop">My Work</p></button>
                 <div class="dropdown-menu" id='dropMenu'>
                    <div class="dropdown-item" id='dropItem' onClick={this.Production}>Scroll</div>
                     <div class="dropdown-divider" id='dropDivider'></div>
                    <div class="dropdown-item" id='dropItem' onClick={this.ProductionPage}>View More</div>
                  </div>
                </div>
              </div>
              <div className="col-md-1" id='widget'>
                <div class="btn-group">
                  <button type="button" id='dropDownButton' class="navButton dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><p className="navTabsTop">Bio</p></button>
                 <div class="dropdown-menu" id='dropMenu'>
                    <div class="dropdown-item" id='dropItem' onClick={this.Design}>Scroll</div>
                     <div class="dropdown-divider" id='dropDivider'></div>
                    <div class="dropdown-item" id='dropItem' onClick={this.DesignPage}>View More</div>
                  </div>
                </div>
              </div>
              <div className="col-md-1" id='widget'>
                <div class="btn-group">
                  <button type="button" id='dropDownButton' class="navButton dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><p className="navTabsTop">Contact</p></button>
                 <div class="dropdown-menu" id='dropMenu'>
                    <div class="dropdown-item" id='dropItem' onClick={this.MarketingPR}>Scroll</div>
                     <div class="dropdown-divider" id='dropDivider'></div>
                    <div class="dropdown-item" id='dropItem' onClick={this.MarketingPRPage}>View More</div>
                  </div>
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