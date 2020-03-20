import React from "react";

const Marketing  = () => {
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5" id="chat-text" style={{ marginTop: "100px" }}>
                    <h2>Marketing</h2>
                    <p>what do we need?<br />
                    what don’t we need?<br />
                    Co-op collaboration?<br />
                    Merchandising/Floor space set up<br />
                    Do we have a merchandiser?<br />
                    Is there a floor display designed? Do we need?<br />
                    This is the best way to introduce the brand to the stores customers<br />
                    will need “at minimum” CAD illustration of design<br />
                    Max Bone Event Give-Away or GWP<br />
                    Small branding token (branded leash, organic doggy treats, branded collar, Max Bone Calendar)<br /></p>
                </div>
                <div className="col-md-5">
                    <img id="chat-image" src="images/stylist.jpg" alt='chat' />
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}
export default Marketing ;