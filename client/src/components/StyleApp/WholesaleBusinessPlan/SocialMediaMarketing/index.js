import React from 'react';


const SocialMediaMarketing = () => {
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5">
                    <img id="shop-image" src="images/shop.png" alt='shop' />
                </div>
                <div className="col-md-5" id="shop-text" style={{ marginTop: "100px" }}>
                    <h2> Ecommerce strategy w/ blogger/celeb adoption </h2>
                    <p>You Tube Series where Max Dog does a complete review of new products<br />
                    This will be to educate followers on new products, new product designs, new season drops, new color, pre-sale products for hot items due, <br /></p>
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}

export default SocialMediaMarketing;