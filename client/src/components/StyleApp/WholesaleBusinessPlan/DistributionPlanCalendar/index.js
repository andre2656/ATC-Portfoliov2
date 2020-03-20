import React from "react";

const DistributionPlanandCalendar = () => {
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5" id="chat-text" style={{ marginTop: "100px" }}>
                    <h2>Distribution Plan and Calendar</h2>
                    <p>3pl set up/location(s)<br />
                    Distribution plan should be based on where product is stored. Closest usually will prevent mistakes.<br /></p>
                </div>
                <div className="col-md-5">
                    <img id="chat-image" src="images/stylist.jpg" alt='chat' />
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}
export default DistributionPlanandCalendar;