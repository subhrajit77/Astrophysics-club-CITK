import Team from "../components/Team/Team";
import classes from "./AboutPage.module.css";

const TeamPage = () => {
    return (
        <>
            <div className={classes.about_page}>
                <Team />
            </div>
        </>
    );
};

export default TeamPage;
