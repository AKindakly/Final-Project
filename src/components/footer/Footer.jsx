import React from "react";
import "../../index.css";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-cont1">
                    <div>
                        <ul>
                            <li>
                                <a href="/about">About Us</a>
                            </li>
                            <li>
                                <a href="/terms">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="/privacy">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            <span className="footer-cont1-block">Address:</span>
                            <span>
                                Street Strasse 123, <br />
                                Berlin 12345
                            </span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="footer-cont1-block">Phone:</span>
                            <span> +49 123 12345</span>

                            <span className="footer-cont1-block">Email:</span>
                            <span> info@domain.com</span>
                        </p>
                    </div>
                </div>
                <div className="footer-cont2">
                    <hr></hr>
                    <p>Copyright &copy; All rights reserved 2022</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
