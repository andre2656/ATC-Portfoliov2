import React from 'react';


const WholesaleSalesGoals = () => {
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5">
                    <img id="shop-image" src="images/shop.png" alt='shop' />
                </div>
                <div className="col-md-5" id="shop-text" style={{ marginTop: "100px" }}>
                    <h2>Wholesale Sales Goals</h2>
                    <p>Projections and Sales Goals are crucial. <br />
                    Average order can help projections<br />
                    Select Retailers, Chains combinations<br />
                    1st quarter/year goals, 2nd year goals, so on.<br /></p>
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}

export default WholesaleSalesGoals;