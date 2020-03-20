import React from "react";

const PricingList = () => {
    return (
        <div className="container flex-container" id= 'WholesaleLeftGray'>
            <div className="row">
                <div className="col-md-6" id="chat-text" style={{ marginTop: "125px" }}>
                    <h2 style={{ color: 'black', fontSize: 45 }}>Pricing List</h2>
                    <p style={{ color: 'black', fontSize: 18 }}>Define pricing for wholesale (2.2?)<br />
                    IMU offers<br />
                    Discount approvals (we never want to offer discounts but…)<br /></p>
                </div>
                <div className="col-md-6">
                    <img id="WholesaleLeftImg " style={{height: 350, width: 'auto', marginTop: 150,}} src="images/pricingChart.jpg" alt='chat' />
                </div>
            </div>
        </div>
    )
}
export default PricingList;