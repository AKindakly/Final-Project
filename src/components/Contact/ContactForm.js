/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const ContactForm = () => {
    return (
        <section>
            <div className="contact">
                <form action="#" method="post" className="contact-form">
                    <p>Get in touch!</p>
                    <div className="contact-form-info">
                        <div>
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="contact-form-info-last">
                            <input type="email" placeholder="Your Email" />
                        </div>
                    </div>

                    <div className="contact-form-subject">
                        <input type="text" placeholder="Subject" />
                    </div>
                    <div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Message"
                            ></textarea>
                        </div>
                    </div>
                    <div>
                        <div className="contact-form-btn">
                            <input type="submit" value="Send" />
                        </div>
                    </div>
                </form>

                <div className="contact-address">
                    <p>
                        <span>Address:</span>
                        <span>
                            Street Strasse 123,
                            <br /> Berlin 12345
                        </span>
                    </p>
                    <p>
                        <span>Phone:</span>
                        <span> +49 123 12345</span>
                    </p>
                    <p>
                        <span>Email:</span>
                        <span> info@domain.com</span>
                    </p>
                </div>
            </div>
            <div className="contact-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.5875334766088!2d13.408401674857028!3d52.52143958029063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1f9014ffeb%3A0xc8fafc484349e4a1!2sBerliner%20Fernsehturm!5e0!3m2!1sen!2sde!4v1668454644615!5m2!1sen!2sde"
                    loading="lazy"
                    width="600"
                    height="450"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default ContactForm;
