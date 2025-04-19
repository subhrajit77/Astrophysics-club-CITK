import React from "react";
// import About from "../components/About/About";
import EventSection from "../components/EventSection/EventSection";
import Team from "../components/Team/Team";
import classes from "./AboutPage.module.css";

const TeamPage = () => {
    return (
        <>
            <div className={classes.about_page}>
                {/* <About /> */}
                <Team />
            </div>
        </>
    );
};

export default TeamPage;
