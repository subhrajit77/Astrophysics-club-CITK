// import Button from "../common/Button/Button";
import classes from "./About.module.css";
import about from "./about.svg";

const About = () => {
    return (
        <>
            <section id="about" className={classes.aboutSec}>
                <div className={classes.about}>
                    <div className={classes.details}>
                        <h3 className={classes.heading}>About</h3>
                        <h2 className={classes.heading1}>Astrophysics Club</h2>
                        <p className={classes.para}>
                            The Astrophysics Club of our college is a vibrant
                            community of space enthusiasts dedicated to
                            unraveling the mysteries of the universe. Through
                            engaging discussions, hands-on stargazing sessions,
                            and insightful workshops, the club fosters curiosity
                            and a deeper understanding of celestial phenomena.
                            It serves as a platform for students to explore the
                            wonders of astrophysics, connect with like-minded
                            individuals, and cultivate a passion for scientific
                            discovery. Whether you're a seasoned stargazer or
                            just beginning your journey into the cosmos, the
                            Astrophysics Club welcomes you to embark on an
                            adventure among the stars.
                        </p>
                    </div>

                    <div className={classes.composition}>
                        <img
                            className={classes.images}
                            src={about}
                            alt="about"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
