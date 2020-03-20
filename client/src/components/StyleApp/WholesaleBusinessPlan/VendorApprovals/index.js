import React from 'react';


const VendorApprovalsFactoring = () => {
    return (
        <div className="container flex-container" id= 'WholesaleLeft'>
            <div className="row">
                <div className="col-md-6">
                    <img id="WholesaleLeftImg" src="images/shop.png" alt='shop'  />
                </div>
                <div className="col-md-6" id="shop-text" style={{ marginTop: "100px" }}>
                    <h2 style={{ color: 'white', fontSize: 45 }}> Vendor Approvals /Factoring</h2>
                    <p style={{ color: 'white', fontSize: 18 }}>Is there a factoring company in place?
                    Forms of payment desired
                    Credit (credit approved by factoring company)
                    Cash
                        Company financing
                    Terms
                    50% deposit, balance prior to shipping (30 days)
                    net 30 (factor approval)
                        net 60 (factor approval)
                    Consignment net 30 or 60 term
                    50/50 Consignment (Consignment of inventory: split 50/50 retail)</p>
                </div>
            </div>
        </div>
    )
}

export default VendorApprovalsFactoring;