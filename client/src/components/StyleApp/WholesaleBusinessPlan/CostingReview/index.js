import React from 'react';


const CostingReview = () => {
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5">
                    <img id="shop-image" src="images/shop.png" alt='shop' />
                </div>
                <div className="col-md-5" id="shop-text" style={{ marginTop: "100px" }}>
                    <h2> Costing Review </h2>
                    <p>Analysis Review of each product to confirm and identify all products that are good for wholesale. <br />
                        Some products may not have margins suitable for wholesale offering.<br /></p>
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}

export default CostingReview;