import React from "react";

const AboutUsStaff = () => {
    return (
        <section>
            <div className="aboutus-staff-txt">
                <div>
                    <h2>Leadership</h2>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus libero mauris, bibendum eget sapien ac, ultrices
                        rhoncus ipsum. Donec nec sapien in urna fermentum
                        ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu
                        vehicula fringilla ut vitae orci. Suspendisse maximus
                        malesuada
                    </p>
                </div>
            </div>
            <div className="aboutus-staff-cards">
                <div className="aboutus-staff-cards-cont">
                    <img src="../staff.webp" alt="" />
                    <span>CEO, CO-FOUNDER</span>
                    <p>Max Example</p>
                </div>
                <div className="aboutus-staff-cards-cont">
                    <img src="../staff.webp" alt="" />
                    <span>HOTEL MANAGER</span>
                    <p>Sam Example</p>
                </div>
                <div className="aboutus-staff-cards-cont">
                    <img src="../staff.webp" alt="" />
                    <span>RECEPTION MANAGER</span>
                    <p>Sarah Example</p>
                </div>
            </div>
        </section>
    );
};

export default AboutUsStaff;
