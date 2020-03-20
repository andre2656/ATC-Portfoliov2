import React from "react";

const TraditionalPrintstrategy = () => {
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5" id="chat-text" style={{ marginTop: "100px" }}>
                    <h2>Traditional Print strategy</h2>
                    <p>Magazine, online, collateral<br /></p>
                </div>
                <div className="col-md-5">
                    <img id="chat-image" src="images/stylist.jpg" alt='chat' />
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}
export default TraditionalPrintstrategy;