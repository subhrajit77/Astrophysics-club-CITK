import React from "react";
import classes from "./EventSection.module.css";
import Button from "../common/Button/Button";
import event from "./event.svg";

const EventSection = () => {
    return (
        <>
            <section id="about" className={classes.aboutSec}>
                <div className={classes.about}>
                    <div className={classes.details}>
                        {/* <h3 className={classes.heading}>About</h3> */}
                        <h2 className={classes.heading1}>EVENTS</h2>
                        <p className={classes.para}>
                            The Astrophysics Club organizes a variety of
                            exciting and engaging events to spark curiosity
                            about the cosmos and deepen the understanding of
                            celestial phenomena. Our events include interactive
                            stargazing sessions where participants explore the
                            night sky and learn about constellations and
                            celestial objects. We host astrophotography
                            competitions, allowing enthusiasts to capture the
                            beauty of the universe. Engaging quizzes and
                            challenges test participants' knowledge of
                            astrophysics, while workshops and seminars provide
                            hands-on learning about topics like space
                            exploration, black holes, and the mysteries of the
                            universe.
                        </p>

                        {/* <p className={classes.para}>
            Spectacular talent stretches boundaries to inspire the participating
            students and the rapt audience alike. A gigantic range of events
            from advanced robotics challenges to entrepreneurship hunts
            promising to zap up the cranial indices of participants. Skill,
            genius and knowledge trading infused with a handful of fun, and a
            titanic prize money sum of above half a million rupees to make Karma
            one of the most unique tech carnivals of the country.
          </p> */}
                        <div className={classes.btn}>
                            <Button link="/events" label="Explore" />
                        </div>
                    </div>

                    <div className={classes.composition}>
                        <img
                            className={classes.images}
                            src={event}
                            alt="about"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventSection;
