import React, { Component } from "react";
import { Redirect, withRouter } from 'react-router-dom';
import '../NavBar/NavBar.css';
import loginController from '../../controllers/LoginController';
import { Modal } from 'react-bootstrap';

class Widget extends Component {
    state = {
        // email: "",
        // password: "",
        // error: null,
        // loggedIn: false,
        // user: null
    }
    // login = (e) => {
    //     e.preventDefault();

    //     loginController.login(this.state.email, this.state.password, (err, user) => {

    //         if (err) {
    //             this.handleShow()
    //         } else {
    //             this.props.history.push("/app");
    //         }
    //     });
    // }

    // inputChanged = event => {
    //     this.setState({ [event.target.name]: event.target.value });
    // }
    // handleClose = () => {
    //     this.setState({ show: false });
    // }
    // handleShow = () => {
    //     this.setState({ show: true });
    // }

    render() {
        return (
            <div id='NavBody'>
                <div className="" id="">
                    <div className="row" id='widgetRow'>
                        {/* <div className="col-md-1" >
                                <img id='widgetLogo' src="images/TCLogo.jpg" alt='shop' />
                            </div> */}
                        <div className='col-md-2' />
                        <div className="col-md-1.5" id='widget'>
                            <button className="navButton" onClick={this.Sales}>
                                <p className="navTabsTop">Sales</p>
                            </button>
                        </div>
                        <div className="col-md-1.5" id='widget' >
                            <button className="navButton" onClick={this.Production}>
                                <p className="navTabsTop">Production</p>
                            </button>
                        </div>
                        <div className="col-md-1.5" id='widget' >
                            <button className="navButton" onClick={this.Design}>
                                <p className="navTabsTop">Design</p>
                            </button>
                        </div>
                        <div className="col-md-1.5" id='widget' >
                            <button className="navButton" onClick={this.MarketingPR}>
                                <p className="navTabsTop">Marketing & PR</p>
                            </button>
                        </div>
                        <div className="col-md-1.5" id='widget' >
                            <button className="navButton" onClick={this.TradeShow}>
                                <p className="navTabsTop">Trade Show</p>
                            </button>
                        </div>
                        <div className="col-md-1.5" id='widget' >
                            <button className="navButton" onClick={this.PopUp}>
                                <p className="navTabsTop">Pop Up Shop</p>
                            </button>
                        </div>
                        <div className="col-md-1.5" id='widget' >
                            <button className="navButton" onClick={this.ShippingLogistics}>
                                <p className="navTabsTop">Shipping & Logistics</p>
                            </button>
                        </div>
                        <div className='col-md-2' />

                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(Widget);