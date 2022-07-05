import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = (props) => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h3>HM-Infotech</h3>
                            <p>
                                Vastrapur lake, Ahmedabad, Gujarat.<br />
                                <strong>Phone:</strong> +91 7990317653<br />
                                <strong>Email:</strong> sahil@hminfotech.co.in<br />
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right"></i> <NavLink onClick={props.goToTop} to="/">Home</NavLink>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <NavLink onClick={props.goToTop} to="/about">About us</NavLink>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <NavLink onClick={props.goToTop} to="/service">Services</NavLink>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <NavLink onClick={props.goToTop} to="/achievement">Achievement</NavLink>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <NavLink onClick={props.goToTop} to="/contact">Contact</NavLink>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <NavLink onClick={props.goToTop} to="/blogs">Blogs</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <NavLink onClick={props.goToTop} to="/service">App Development</NavLink>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <NavLink onClick={props.goToTop} to="/service">Web Development</NavLink>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <NavLink onClick={props.goToTop} to="/service">Cloud Services</NavLink>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <NavLink onClick={props.goToTop} to="/service">DevOps Services</NavLink>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right"></i>
                                    <NavLink onClick={props.goToTop} to="/service">IT Consultancy</NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Social Networks</h4>
                            <p>Let's connect with us on our social media platforms</p>
                            <div className="social-links mt-3">
                                <a href="https://www.linkedin.com/company/hm-infotech/" className="linkedin" target="_blank" rel="noopener"><i className="bx bxl-linkedin"></i></a>
                                <a href="#" className="linkedin" target="_blank" rel="noopener"><i className="bx bxl-facebook"></i></a>
                                <a href="#" className="linkedin" target="_blank" rel="noopener"><i className="bx bxl-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-4">
                <div className="copyright">
                    &copy; Copyright <strong><span>HM-Infotech</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    )
}

export default Footer