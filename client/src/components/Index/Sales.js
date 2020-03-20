import React from "react";
import { Link } from 'react-router-dom';
import './Index.css'


const Sales = () => {
    return (
        <div className="container" style={{ display: 'block', backgroundColor: '#000', }}>
            <div className="row" style={{ backgroundColor: '#fff', position: 'absolute', right: 50, left: 50, top: 1650, height: 450 }}>
                <div className="col-md-1" />
                <div className="col-md-4" id='introText'>
                    <h2 className="dark">Sales</h2>
                    <p style={{ fontSize: 25 }} className='dark'>
                        Sales strategy/training
                        Identifying strengths and weakness in companies structure/operation. 
                    </p>
                    <button className='learnMore'>Learn more </button>
                    
                </div>
                <div className="col-md-2" />
                <div className="col-md-4" ><img id='salesImg' src="images/salesImage.jpeg" alt='Sales Img' /></div>
              
                <div className="col-md-1" />
            </div>
        </div>
    )
}

export default Sales;