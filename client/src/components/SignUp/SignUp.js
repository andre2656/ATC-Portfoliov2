import React, { Component } from "react";
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import './SignUp.css';
import { Modal } from 'react-bootstrap';
import validator from 'validator';


class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        premium: false
    };

    firstNameChanged = (event) => {
        this.setState({ firstName: event.target.value });
    };
    lastNameChanged = (event) => {
        this.setState({ lastName: event.target.value });
    };
    emailChanged = (event) => {
        this.setState({ email: event.target.value });
    }
    passwordChanged = (event) => {
        this.setState({ password: event.target.value });
    }
    handleClose = () => {
        this.setState({ show: false });
    }
    handleShow = () => {
        this.setState({ show: true });
    }
    handleClick = () => {
        if (this.isFormValid()) {
            this.setState({
                premium: false
            },
                this.createAccount
            )
            
        } else {
            this.handleShow();
        }
    }
    handlePremiumClick = () => {
        if (this.isFormValid()) {
            this.setState({
                premium: true
            },
            () => {
                console.log(this.state.premium);
                this.createAccount();
            }
            );
            
            
        } else {
            this.handleShow();
        }
    }
    createAccount() {
        axios.post('api/Users/sign-up', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            premium: this.state.premium
        })
            .then((response) => {
                if (response.status = 200){
                    window.location.pathname = "/app";
                }
                else {
                    console.log('error to db status: ', response.status)
                }
                
               
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    isFormValid = () => {
        if (this.state.firstName === '' || this.state.lastName === '' ||  this.state.email === '' || !validator.isEmail(this.state.email) || this.state.password === '') {
            return false;
        } else {
            return true;
        }
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-2" />
                        <div className="col-md-8">
                            {/* <h2>Get Started for Free or Level Up With Premium</h2>
                            <p>With a free Closet account, you can take quizzes, shop from a photo and access personalized fashion pins to help cultivate your perfect look. With premium, you enjoy all the great features of a free account, but with access to a stylist who's available to chat at any time!</p> */}
                            <br />
                            <form>
                                <div className="form-group row">
                                    <label name="company" className="col-sm-3 col-form-label">Company</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="company" placeholder="" onChange={this.companyChanged} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label name="adminName" className="col-sm-3 col-form-label" >Admin Name</label>
                                    <div className="col-sm-9">
                                        <input type="Name" className="form-control" id="adminName" placeholder="" onChange={this.adminNameChanged} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label name="email" className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control" id="email" placeholder="" onChange={this.emailChanged} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label name="number" className="col-sm-3 col-form-label">Contact Number</label>
                                    <div className="col-sm-9">
                                        <input type="phone" className="form-control" id="number" placeholder="" onChange={this.numberChanged} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label name="companyWebsite" className="col-sm-3 col-form-label">Company Website (optional)</label>
                                    <div className="col-sm-9">
                                        <input type="url" className="form-control" id="companyWebsite" placeholder="" onChange={this.companyWebsiteChanged} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label name="reason" className="col-sm-3 col-form-label">Reason for Contact</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="reason" placeholder="" onChange={this.reasonChanged} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label name="services" className="col-sm-3 col-form-label">Services Intrested In</label>
                                    <div className="col-sm-3">
                                        <img id='widgetLogo' src="images/designIcon.jpg" alt='shop' /><br/>
                                        <input type="checkbox" className="" id="reason" placeholder="" onChange={this.reasonChanged} /><br />
                                        <label name="reason" className="">Sales</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <img id='widgetLogo' src="images/designIcon.jpg" alt='shop' /><br />
                                        <input type="checkbox" className="" id="reason" placeholder="" onChange={this.reasonChanged} /><br />
                                        <label name="reason" className="">Production</label>
                                    </div>
                                    <div className='col-sm-3' />
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-4">
                                        <img id='widgetLogo' src="images/designIcon.jpg" alt='shop' /><br />
                                        <input type="checkbox" className="" id="reason" placeholder="" onChange={this.reasonChanged} /><br />
                                        <label name="reason" className="">Marketing & PR</label>
                                    </div>
                                    <div className="col-sm-4">
                                        <img id='widgetLogo' src="images/designIcon.jpg" alt='shop' /><br />
                                        <input type="checkbox" className="" id="reason" placeholder="" onChange={this.reasonChanged} /><br />
                                        <label name="reason" className="">Design</label>
                                    </div>
                                    <div className="col-sm-4">
                                        <img id='widgetLogo' src="images/designIcon.jpg" alt='shop' /><br />
                                        <input type="checkbox" className="" id="reason" placeholder="" onChange={this.reasonChanged} /><br />
                                        <label name="reason" className="">Shipping & Logistics</label>

                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className='col-sm-3' />
                                    <div className="col-sm-3">
                                        <img id='widgetLogo' src="images/designIcon.jpg" alt='shop' /><br />
                                        <input type="checkbox" className="" id="reason" placeholder="" onChange={this.reasonChanged} /><br />
                                        <label name="reason" className="">Trade Show</label>
                                    </div>
                                    <div className="col-sm-3">
                                        <img id='widgetLogo' src="images/designIcon.jpg" alt='shop' /><br />
                                        <input type="checkbox" className="" id="reason" placeholder="" onChange={this.reasonChanged} /><br />
                                        <label name="reason" className="">Pop Up Shop Dev.</label>

                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className='col-sm-5' />
                                    
                                </div>
                                <div className="col-md-2" />
                                <br />
                                <div className="row">
                                    <div className="col-md-2" />
                                    <div className="col-md-8"><button type="button" onClick={this.handleClick} className="btn btn-dark sign-up-button">Sign Up</button></div>
                                    {/* <div className="col-md-4"><button type="button" onClick={this.handlePremiumClick} className="btn btn-dark sign-up-button">Unlock Premium</button></div> */}
                                    <div className="col-md-2" />
                                </div>
                            </form>
                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Body>
                                        <div>
                                            <h5 className='row'>Please fill out all fields and provide a valid email address.</h5>
                                        </div>
                                    </Modal.Body>
                                </Modal.Header>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default SignUp;