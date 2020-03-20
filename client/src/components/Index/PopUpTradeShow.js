import React from "react";
import { Link } from 'react-router-dom';
import './Index.css'


const PopUpTradeShow = () => {
    return (
        <div className="container" style={{ display: 'block', backgroundColor: '#000', }}>
            <div className="row" style={{ backgroundColor: '#fff', position: 'absolute', right: 50, left: 50, top: 2700, height: 650 }}>
                <div className="col-md-1" />
                <div className="col-md-4" id='introText'>
                    <img id='popUpImg' src="images/popUpImage.jpeg" alt='Pop Up Shop Img' />
                    <h2 className="dark">Pop Up Shop Development</h2>
                    <p style={{ fontSize: 25 }} className='dark'>
                      Design/Planning/Budget.
                    T&A Plan.
                    Analytic Projections/Results.
                    Event/Location Scouting Report.
                    </p>
                    <button className='learnMore'>Learn more </button>

                </div>
                <div className="col-md-2" />
                <div className="col-md-4" id='introText'>

                    <h2 className="dark">Trade Show</h2>
                    <p style={{ fontSize: 25 }} className='dark'>
                   Design/Planning/Budget.
                    T&A Plan.
                    Booth Design.
                    Sales Goals.
                    Rep Recruitment & Training.
                    Sales Aides.
                    </p>
                    <button className='learnMore'>Learn more </button>
                    <img id='tradeShowImg' src="images/tradeShowImage.jpeg" alt='Trade Show Img' />
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}

export default PopUpTradeShow;