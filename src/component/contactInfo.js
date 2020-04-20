import React from 'react';

export const ContactInfoComponent = (props) =>{
        return (
            <div className="col-md-5 d-flex">
            <div className="row d-flex contact-info mb-5">
                <div className="col-md-12 ftco-animate">
                    <div className="box p-2 px-3 bg-light d-flex">
                        <div className="icon mr-3">
                            <span className="icon-map-signs"></span>
                        </div>
                        <div>
                            <h3 className="mb-3">Address</h3>
                            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 ftco-animate">
                    <div className="box p-2 px-3 bg-light d-flex">
                        <div className="icon mr-3">
                            <span className="icon-phone2"></span>
                        </div>
                        <div>
                            <h3 className="mb-3">Contact Number</h3>
                            <p><a href="tel://1234567920">+ 1235 2355 98</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 ftco-animate">
                    <div className="box p-2 px-3 bg-light d-flex">
                        <div className="icon mr-3">
                            <span className="icon-paper-plane"></span>
                        </div>
                        <div>
                            <h3 className="mb-3">Email Address</h3>
                            <p><a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 ftco-animate">
                    <div className="box p-2 px-3 bg-light d-flex">
                        <div className="icon mr-3">
                            <span className="icon-globe"></span>
                        </div>
                        <div>
                            <h3 className="mb-3">Website</h3>
                            <p><a href="#">yoursite.com</a></p>
                        </div>
                    </div>
                </div>
                </div>
        </div>        
        )
}