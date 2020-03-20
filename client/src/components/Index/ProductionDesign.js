import React from "react";
import { Link } from 'react-router-dom';
import './Index.css'


const ProductionDesign = () => {
    return (
        <div className="container" style={{ display: 'block', backgroundColor: '#000', }}>
            <div className="row" style={{ backgroundColor: '#fff', position: 'absolute', right: 50, left: 50, top: 2150, height: 550 }}>
                <div className="col-md-1" />
                <div className="col-md-4" id='introText'>
                    <img id='designImg' src="images/designImage.png" alt='Design Img' />
                    <h2 className="dark">Design</h2>
                    <p style={{ fontSize: 25 }} className='dark'>
                     Conception.
                    Yearly Plans (Budget/T&A).
                    Graphic Design.
                    Story Development.
                    </p>
                    <button className='learnMore'>Learn more </button>
                    
                </div>
                <div className="col-md-2" />
                <div className="col-md-4" id='introText'>
                    
                    <h2 className="dark">Production</h2>
                    <p style={{ fontSize: 25 }} className='dark'>
                        Planning & Strategy.
                       Factory Placement.
                       Delivery & Distribution.
                       Technical Design.
                    </p>
                    <button className='learnMore'>Learn more </button>
                    <img id='productionImg' src="images/productionImage.jpeg" alt='Production Img' />
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}

export default ProductionDesign;