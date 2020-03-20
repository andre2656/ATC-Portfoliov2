import React from "react";

const CommissionPlan = () => {
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5" id="chat-text" style={{ marginTop: "100px" }}>
                    <h2>Commission Plan</h2>
                    <p>Depending on experience and account book reps will be given between 3-15% commission<br />
                    Inside sales team work on base pay with strict appointment scheduling goals<br />
                    Option: 30-90 day draw against commission. Draw will be based on average sale per sales goal<br />
                    Payout date should be firm. Example: 30 days after “Order” is shipped during pay cycle. <br />
                    Commission Portal should be easily accessed. Login/Password protected. Info should include Expected payment date. Any payment adjustments, “DAC” Draw Against Commission, Shipping dates and list of orders, history.<br/></p>
                </div>
                <div className="col-md-5">
                    <img id="chat-image" src="images/stylist.jpg" alt='chat' />
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}
export default CommissionPlan;