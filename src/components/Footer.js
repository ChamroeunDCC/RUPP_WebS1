import React from "react";

const Footer = () => {
    return(
        <div className="footer_color">
            <div className="footer container d-grid">
                <div className="row row-col-2" >
                    <div className="col">
                        <div className="item_footer">
                            <h5>Our Address</h5>
                            <p>Street 240, loaction behind the Royal Palace <br/> in Phnom Penh </p>
                        </div>
                    <div className="col">
                        <div className="item_footer">
                            <h5>Email</h5>
                            <p>Name@gmail.com</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="item_footer">
                            <h5>Phone Number</h5>
                            <p>+855 123 456</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="item_footer">
                            <h5>Opening Hours</h5>
                            <p>Mon-Sat - 23PM, Sunday:Closed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;