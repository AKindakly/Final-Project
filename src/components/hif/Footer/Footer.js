import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const [date, setDate] = useState(new Date());
    setInterval(() => {
        setDate(new Date());
    }, 1000);

    return (
        <>
            <footer className="footer">
                <div className="footer-cont1">
                    <div>
                        <ul>
                            <li>
                                <a href="/terms">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="/privacy">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
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
                    <p>
                        Copyright &copy; - {date.getFullYear()} All rights
                        reserved
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
