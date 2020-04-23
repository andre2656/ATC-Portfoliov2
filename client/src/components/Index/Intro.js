import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Index.css'


class Intro extends Component{
    signUp = () => {
        window.location.pathname = "/sign-up";
    }
    render() {
    return(
        <div className = "container" style = {{ display: 'block', backgroundColor: '#000', }}>
    <div className="row" style={{ backgroundColor: '#000', position: 'absolute', right: 0, left: 0, height: 900, marginTop: 20, }}>
        <div className="col-md-1" />
        <div className="col-md-6" id='introText'>
            <h2 className="sharp">Sites By Dre</h2>
                    <p style={{ fontSize: 28 }} className='sharp'> I am a full-stack developer with a focus on React. <br/> I am here to not only succed but to learn along the way!</p>
            <p style={{ fontSize: 22 }} className='sharp'> Want a custom site by me?</p>
            <button className='introSignUpBtn' onClick={this.signUp}> Sign Up </button>
            <button className='learnMore'>Learn more</button>
        </div>
        <div className="col-md-4" >
            <img id='Logo' src="images/ATCLogoBlk.jpg" alt='shop' />
        </div>
    </div>
        </div >
    )
    }
    
}

export default Intro;