import React from 'react';


const ChainofcommandproceduresList = () => {
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5">
                    <img id="shop-image" src="images/shop.png" alt='shop' />
                </div>
                <div className="col-md-5" id="shop-text" style={{ marginTop: "100px" }}>
                    <h2> Chain of command procedures List </h2>
                    <p>Important for reps to know who does what in order to go directly to the source. <br />
                    For Every new account the retailer should be given a list of who to contact.<br />
                    Only the utmost escalated issues should go to the head of the org chart. Otherwise follow the org chart for escalation.<br /></p>
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}

export default ChainofcommandproceduresList;