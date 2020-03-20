import React from 'react';


const WholesaleVendorEventschedule = () => {
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5">
                    <img id="shop-image" src="images/shop.png" alt='shop' />
                </div>
                <div className="col-md-5" id="shop-text" style={{ marginTop: "100px" }}>
                    <h2> Wholesale Vendor Event schedule </h2>
                    <p>Vendor Event (Event to invite vendors to see our products)<br />
                    Invite only<br />
                    Vendor will receive gift bag<br />
                    Vendor will see and hear details on everything we have to offer<br />
                    Vendor will be encouraged to sign orders at event<br /></p>
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}

export default WholesaleVendorEventschedule;