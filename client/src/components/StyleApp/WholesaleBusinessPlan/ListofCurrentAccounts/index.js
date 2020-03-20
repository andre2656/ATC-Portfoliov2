import React from "react";

const Listofcurrentaccounts = () => {
    return (
        <div className="container flex-container" id="WholesaleRight">
            <div className="row">
                <div  className="col-md-6" id="chat-text" style={{ marginTop: "100px" }}>
                    <h2 style={{ color: 'black', fontSize: 45 }}>List of current accounts</h2>
                    <p style={{ color: 'black', fontSize: 18 }}>What open accounts do we have?<br />
                    What accounts are being worked currently?<br />
                    What accounts do we want?<br /></p>
                </div>
                <div className="col-md-6">
                    <img id="WholesaleRightImg" src="images/currentAccounts.jpeg" alt='current accounts' />
                </div>
            </div>
        </div>
    )
}
export default Listofcurrentaccounts;