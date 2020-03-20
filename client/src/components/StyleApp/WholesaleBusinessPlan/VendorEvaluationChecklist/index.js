import React from "react";

const VendorEvaluationChecklist = () => {
    return (
        <div className="container flex-container" id= 'WholesaleLeftOverflow'>
            <div className="row">
               
                <div className="col-md-6" id="chat-text" style={{ marginTop: "50px" }}>
                    <h2 style={{ color: 'black', fontSize: 45 }}>Vendor Evaluation Checklist</h2>
                    <p style={{ color: 'black', fontSize: 18 }}>Sales volume
                        List of products and brands carried
                        Social media presence
                        Images of store
                        Independent images of the store will stay in their file. This shows how the store will look at any given time. Images should be taken at morning, afternoon and right before closing.
                        Images of the floor plan, outside, entrance.
                        How long have they been in business
                        There needs to be a minimum lifespan. It’s important to to make sure we can depend on the wholesaler conducting good business practices. 
                        Factory certified- good credit standing
                        No exceptions. If wholesalers can’t or won’t pay their bills in the long run it will be a problem. Look at Forever 21 didn’t pay there bills and now have filed Chapter 11 bankruptcy leaving a lot of real estate companies high and dry with their debt. 
                        Marketing scope (how do they advertise?)
                        Is this a store we can send celebs in to purchase?
                        will store give celeb credit in exchange for publicity?
                        Vendor packaging
                        Vendor Customer Service Scores
                        we will do our own evaluation
                        Return policy
                        Are there any competitor stores nearby? 
                        Would we prefer being in that store?</p>
                </div>
                <div className="col-md-6">
                    <img id="WholesaleLeftImg" src="images/vendorEvaluation.jpeg" alt='chat' />
                </div>
            </div>
        </div>
    )
}
export default VendorEvaluationChecklist;