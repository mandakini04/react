// Footer.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="footer-info">
                            <div className="section-title">
                                <h2>Headquarter</h2>
                            </div>
                            <address>
                                <p>company address</p>
                            </address>

                            <ul className="social-icon">
                                <li><a href="#" className="fa fa-facebook-square" aria-label="Facebook icon"></a></li>
                                <li><a href="#" className="fa fa-twitter" aria-label="Twitter icon"></a></li>
                                <li><a href="#" className="fa fa-instagram" aria-label="Instagram icon"></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="footer-info">
                            <div className="section-title">
                                <h2>Contact Info</h2>
                            </div>
                            <address>
                                <p>Company Number</p>
                                <p><a href="mailto:hello@youremail.co">hello@youremail.co</a></p>
                            </address>

                            <div className="footer_menu">
                                <h2>Quick Links</h2>
                                <ul>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="#">Investor</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Refund Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12">
                        <div className="footer-info newsletter-form">
                            <div className="section-title">
                                <h2>Newsletter Signup</h2>
                            </div>
                            <div>
                                <div className="form-group">
                                    <form action="#" method="get">
                                        <input type="email" className="form-control" placeholder="Enter your email" name="email" id="email" required />
                                        <input type="submit" className="form-control" name="submit" id="form-submit" value="Send me" />
                                    </form>
                                    <span><sup>*</sup> Please note - we do not spam your email.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
