import React from "react";
import { Link } from 'react-router-dom';
import './Index.css'


const Marketing = () => {
    return (
        <div className="container" style={{ display: 'block',  }}>
            <div className="row" style={{ backgroundColor: '#fff',position: 'absolute', right: 50, left: 50, top: 1020, height: 550 }}>
               
                <div className='col-md-7'>
                    <img id='marketingImg' src="images/marketingImage.jpg" alt='Sales Img' />
                </div>
                <div className="col-md-4" id='introText'>
                    <h2 className="dark">Marketing & PR</h2>
                    <p style={{ fontSize: 20 }} className='dark'>
                       Social Media Development.<br/>
                        Press.
                        Celebrity Adoption.<br />
                        Blogger Adoption.
                    </p>
                    <button className='learnMore'>Learn more </button>
                </div>
                
            </div>
        </div>
    )
}

export default Marketing;