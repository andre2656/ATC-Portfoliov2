import React from 'react';


const WholesaleStrategyPlanwithProjections = () => {
    return (
        <div className="container flex-container" id= 'WholesaleLeftGray'>
            <div className="row">
                <div className="col-md-6">
                    <img id="WholesaleLeftImg" src="images/shop.png" alt='shop' />
                </div>
                <div className="col-md-6" id="shop-text" style={{ marginTop: "100px" }}>
                    <h2 style={{ color: 'black', fontSize: 45 }}>Wholesale Strategy Plan with Projections</h2>
                    <p style={{ color: 'black', fontSize: 18 }}>Do we want to open retail accounts regionally first, select retailers (top 10), nationwide or combination?<br />
                    Each will have a separate plan and budget including trade show, marketing support, events<br /></p>
                </div>
            </div>
        </div>
    )
}

export default WholesaleStrategyPlanwithProjections;