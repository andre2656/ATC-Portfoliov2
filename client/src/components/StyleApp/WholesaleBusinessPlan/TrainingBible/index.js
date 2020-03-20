import React from "react";

const TrainingBible = () => {
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5" id="chat-text" style={{ marginTop: "100px" }}>
                    <h2>Training Bible</h2>
                    <p>Reference Guide to all employees/reps. <br />
company values, sales tactics, uniformity, company contact lists, reference guide, sales aides, list of do’s and don’ts, Corporate Org Chart, List of upcoming planned events, <br /></p>
                </div>
                <div className="col-md-5">
                    <img id="chat-image" src="images/stylist.jpg" alt='chat' />
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}
export default TrainingBible;