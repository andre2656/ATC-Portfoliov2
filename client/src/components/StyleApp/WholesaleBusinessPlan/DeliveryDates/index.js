import React from "react";

const DeliveryDatesSchedule = () => {
    return (
        <div className="container flex-container" id= 'WholesaleRight'>
            <div className="row">
                <div className="col-md-6" id="chat-text" style={{ marginTop: "100px" }}>
                    <h2 style={{ color: 'black', fontSize: 45 }}>Delivery Dates/Schedule</h2>
                    <p style={{ color: 'black', fontSize: 18 }}>Production Delivery Schedule/Calendar<br />
                    Delivery Date Window for Retailer Shipping<br /></p>
                </div>
                <div className="col-md-6">
                    <img id="WholesaleRightImg" src="images/stylist.jpg" alt='chat' />
                </div>
            </div>
        </div>
    )
}
export default DeliveryDatesSchedule;