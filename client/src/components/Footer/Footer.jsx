import React from "react";
import clublogo from "../../assets/club-logo.png";
import classes from "./Footer.module.css";

const spiderurl = "https://www.linkedin.com/in/abhishek30125/";
const saurabh = "https://www.linkedin.com/in/subhrajittalukdar/";

const Footer = () => {
    return (
        <div className={classes.footer_outer}>
            <div className={classes.footer}>
                <div className={classes.footer_first}>
                    <div className={classes.footer_sambhav_image_div}>
                        <div>
                            <img
                                className={classes.footer_sambhav_image}
                                src={clublogo}
                                alt="club logo"
                            ></img>
                        </div>
                        <div>
                            {/* <h1 className={classes.footer_sambhav}>SAMBHAV'23</h1> */}
                        </div>
                    </div>
                    <p className={classes.footer_sambhav_description}>
                        Astrophysics Club
                    </p>
                    <p className={classes.footer_sambhav_description}>
                        Follow the Astrophysics Club on social media for stellar
                        updates and celestial wonders!
                    </p>
                    <div className={classes.footer_social_item}>
                        <div>
                            <a
                                // href={sambhavinsta}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.footer_a_link}
                            >
                                <img
                                    className={classes.footer_social_link}
                                    src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                // href={sambhavlinkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={classes.footer_a_link}
                            >
                                <img
                                    className={classes.footer_social_link}
                                    src="https://img.icons8.com/color/48/ffffff/linkedin-circled--v1.png"
                                    alt=""
                                />
                            </a>{" "}
                        </div>
                        {/* <div>
              <a
                href={sambhavtwitter}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}>
                <img className={classes.footer_social_link} src="https://img.icons8.com/fluency/48/ffffff/twitter-circled.png" alt="" />
              </a>  </div> */}
                    </div>
                </div>
                <div className={classes.footer_first}>
                    <p className={classes.footer_sambhav_description}>
                        <strong>Quick Links:</strong>
                        <br />
                        <a
                            href="https://www.cit.ac.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.footer_a_link}
                        >
                            CIT Kokrajhar
                        </a>
                        <br />
                        <a
                            href="https://library.cit.ac.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.footer_a_link}
                        >
                            Central Library
                        </a>
                    </p>
                </div>

                <div className={classes.footer_third}>
                    <h2 className={classes.footer_menu_heading}>Contact Us</h2>
                    <div className={classes.footer_contact}>
                        <div className={classes.footer_contact_item_image}>
                            <img
                                className={classes.footer_contact_image}
                                src="https://img.icons8.com/ios-filled/50/ffffff/marker.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <p>Central Institute of Technology Kokrajhar</p>
                        </div>
                    </div>
                    <div className={classes.footer_contact}>
                        <div>
                            <img
                                className={classes.footer_contact_image}
                                src="https://img.icons8.com/ios-filled/50/ffffff/outgoing-call.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <p>Convenor Phone number</p>
                        </div>
                    </div>
                    <div className={classes.footer_contact}>
                        <div>
                            <img
                                className={classes.footer_contact_image}
                                src="https://img.icons8.com/glyph-neue/64/ffffff/gmail.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <p className={classes.mail}>
                                astrophysicsclub@cit.ac.in
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footer_creator_div}>
                <h4 className={classes.footer_creator}>
                    Website designed and created by{" "}
                    <a
                        href={spiderurl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.footer_a_link}
                    >
                        Abhishek Kashyap
                    </a>{" "}
                    &{" "}
                    <a
                        href={saurabh}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.footer_a_link}
                    >
                        {" "}
                        Subhrajit Talukdar
                    </a>{" "}
                </h4>
            </div>
        </div>
    );
};

export default Footer;
