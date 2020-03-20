import React from "react";
import { Link } from 'react-router-dom';
import './Index.css'


const Shipping = () => {
    return (
        <div className="container" style={{ display: 'block', }}>
            <div className="row" style={{ backgroundColor: '#fff', position: 'absolute', right: 50, left: 50, top: 3400, height: 450 }}>

                <div className='col-md-7'>
                    <img id='shippingImg' src="images/shippingImage.jpeg" alt='Sales Img' />
                </div>
                <div className="col-md-4" id='introText'>
                    <h2 className="dark">Shipping & Logistics</h2>
                    <p style={{ fontSize: 25 }} className='dark'>
                        Domestic/International.
                        Distribution Planning.
                        3PL.
                        Scheduling/Budgeting/Reporting.
                    </p>
                    <button className='learnMore'>Learn more </button>
                </div>

            </div>
        </div>
    )
}

export default Shipping;