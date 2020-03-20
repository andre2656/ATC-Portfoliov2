import React from 'react';
import '../index.css'

const LineSheets = () => {
    return (
        <div className="container flex-container" id= 'WholesaleLeft'>
            <div className="row">
                <div className="col-md-6">
                    <img id="WholesaleLeftImg" src="images/lineSheet.png" alt='line sheets' />
                </div>
                <div className="col-md-6" id="shop-text" style={{ marginTop: "100px" }}>
                    <h2 style= {{color: 'white', fontSize: 45 }}>Line Sheets</h2>
                    <p style={{ color: 'white', fontSize: 18 }}>Paper and Electronic<br />
                    Images, Sizing, Pricing, Page Order Summary, Contact Listed, Company info <br /></p>
                </div>
            </div>
        </div>
    )
}

export default LineSheets;