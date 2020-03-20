import React from 'react';


const CustomerService  = () => {
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5">
                    <img id="shop-image" src="images/shop.png" alt='shop' />
                </div>
                <div className="col-md-5" id="shop-text" style={{ marginTop: "100px" }}>
                    <h2> Customer Service </h2>
                    <p>Training is crucial on how to communicate to Retailers
                    24 hour customer service is the goal<br />
                    5 min response time is the goal<br />
                    Cust. Service will have full access to retailer accounts<br />
                    will answer delivery dates, note adjustments<br />
                    take payments, update account<br />
                    contact rep with any urgent matters<br /></p>
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}

export default CustomerService ;