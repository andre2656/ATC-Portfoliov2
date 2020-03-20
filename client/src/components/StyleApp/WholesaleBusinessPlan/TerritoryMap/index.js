import React from 'react';
import '../index.css'

const TerritoryMap = () => {
    return (
        <div className="container flex-container" id ='WholesaleFlux'>
            <div className="row">
                <div className="col-md-6">
                    <img id='WholesaleLeftImg' src="images/territoryMap.jpg" alt='shop' />
                </div>
                <div className="col-md-6" id="shop-text" style={{ marginTop: "100px" }} >
                    <h2 style={{ color: 'black', fontSize: 45 }}>Territory Map</h2>
                    <p style={{ color: 'black', fontSize: 18 }}> Territory must be identified even if there is only one current rep. <br/>
                        Territories can be divided into Regions or State Regions <br />
                        Visual Map View <br /></p>
                </div>
            </div>
        </div>
    )
}

export default TerritoryMap;