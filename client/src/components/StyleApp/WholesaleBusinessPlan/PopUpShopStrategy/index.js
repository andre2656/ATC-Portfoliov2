import React from "react";

const Popupshopstrategy = () => {
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5" id="chat-text" style={{ marginTop: "100px" }}>
                    <h2>Pop up shop strategy</h2>
                    <p>this strategy should be clear. What is the objective?<br />
                    Is it just to introduce the brand in a new area?<br />
                    Is it to investigate opening a new retail store?<br />
                    Is it to gauge reception for the brand?<br />
                    Is it to piggy back on related events in the area?<br />
                    Is it to scope traffic in the area<br />
                    A map and strategy for each chosen area needs to be planned.<br />
                    A budget needs to be prepared for each pop up<br />
                    A clear objective needs to be set for each location (it’s ok for objectives to vary per location)<br /></p>
                </div>
                <div className="col-md-5">
                    <img id="chat-image" src="images/stylist.jpg" alt='chat' />
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}
export default Popupshopstrategy;