import React from "react";

const TradeShow = () => {
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5" id="chat-text" style={{ marginTop: "100px" }}>
                    <h2>Trade Show Schedule/Budget</h2>
                    <p>Trade Shows are important for wholesale expansion. Orders are finalized at these trade shows and projections/ROI can be and should be completed prior to committing. <br />
                    Factors to consider:<br />
                    Planning/Calendar (trade shows usually occur during seasonal launch/drops<br />
                    Budget: Space needed, travel, advertisement, staff, <br />
                    Staff worthy<br />
                    Marketing/Social Media support/Collateral/Guests<br />
                    Floor plan and visibility<br />
                    Appointments set<br />
                    Promotions<br />
                    Equipment<br />
                    Samples<br />
                    Inventory<br />
                    Backup/Paper order forms, pens, calculators, whiteout, mints etc<br />
                    Planning Schedule: 4-6 months prior to show (best rate for floor space 8 months)<br />
                    Design Display: up to 12 months in advance<br />
                    Line sheets w/ Order forms for retailers (retailers can fill out orders during presentation)<br />
                    Invite list (key retailers, taste makers)<br />
                    Sales Training (4 weeks minimum) not including hiring<br /></p>
                </div>
                <div className="col-md-5">
                    <img id="chat-image" src="images/stylist.jpg" alt='chat' />
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}
export default TradeShow;