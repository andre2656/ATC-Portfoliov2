import React from 'react';


const OTSReport= () => {
    return (
        <div className="container flex-container" id= 'WholesaleRightBlack'>
            <div className="row">
                <div className="col-md-6">
                    <img id="WholesaleRightImg" src="images/currentAccounts.jpeg" alt='shop' />
                </div>
                <div className="col-md-6" id="shop-text" style={{ marginTop: "100px" }}>
                    <h2 style={{ color: 'white', fontSize: 45 }}>OTS report (Open to Sale)</h2>
                    <p style={{ color: 'white', fontSize: 18 }}> Full Open to Sale report (actuals)<br />
                    Live document if possible<br />
                    Login/Password Online Portal for Retailer Orders/Offers<br /></p>
                </div>
            </div>
        </div>
    )
}

export default OTSReport;