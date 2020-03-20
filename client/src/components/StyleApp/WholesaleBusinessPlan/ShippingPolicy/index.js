import React from "react";

const Shippingpolicy = () => {
    return (
        <div className="container flex-container" id='WholesaleFlux'>
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5" id="chat-text" style={{ marginTop: "100px" }}>
                    <h2 style={{ color: 'black', fontSize: 45 }}>Shipping policy</h2>
                    <p style={{ color: 'black', fontSize: 18 }}>Cancel dates?<br />
                    Shipping discounts to vendor?<br />
                    Vendor responsibility for shipping?<br />
                    Payment in full prior to shipping?<br /></p>
                </div>
                <div className="col-md-5">
                    <img id='WholesaleLeftImg' src="images/stylist.jpg" alt='chat' />
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}
export default Shippingpolicy;