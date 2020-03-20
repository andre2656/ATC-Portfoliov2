import React from 'react';


const NewRetailerOpenEvent = () => {
    return (
        <div className="container flex-container" id= 'WholesaleLeft'>
            <div className="row">
                <div className="col-md-6">
                    <img id="WholesaleLeftImg" src="images/shop.png" alt='shop' />
                </div>
                <div className="col-md-6" id="shop-text" style={{ marginTop: "100px" }}>
                    <h2 style={{ color: 'white', fontSize: 45 }}>New Retailer Open Event</h2>
                    <p style={{ color: 'white', fontSize: 18 }}>Invite local bloggers
                    Gift bags
                    local advertising
                    Social announcements 
                    (2) full sample sets
                    Every items available to sell for retailers needs to be compiled into a sample set.
                    Hard copy of marketing collateral
                    Retailer will select what they want to help store
                    posters, cards, POS displays, floor display
                    Hard copy line sheets
                    Preassigned login/password for vendor portal ordering system
                    iPad (wifi/cell) for ordering with active Vendor Portal, Pre-load line sheet/order form</p>
                </div>
            </div>
        </div>
    )
}

export default NewRetailerOpenEvent;