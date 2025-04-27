import classes from "./Team.module.css";
import TeamData from "../../assets/TeamData.json";
import FacultyData from "../../assets/FacultyData.json";

const Team = () => {
    return (
        <div className={classes.facultySection}>
            <h1 className={classes.facultyHeading}>Our Faculty Incharges</h1>
            <div className={classes.facultyGrid}>
                {FacultyData.map((member) => (
                    <div key={member.id} className={classes.teamCard}>
                        <img
                            className={classes.memberPhoto}
                            src={member.Image}
                            alt={member.Name}
                        />
                        <h3 className={classes.Name}>{member.Name}</h3>
                        <p className={classes.memberDesignation}>
                            {member.Designation}
                        </p>
                        <p className={classes.memberEmail}>{member.Email}</p>
                    </div>
                ))}
            </div>
            <h1 className={classes.teamHeading}>Our Core Team</h1>
            <div className={classes.teamGrid}>
                {TeamData.map((member) => (
                    <div key={member.id} className={classes.teamCard}>
                        <img
                            className={classes.memberPhoto}
                            src={member.Image}
                            alt={member.Name}
                        />
                        <h3 className={classes.Name}>{member.Name}</h3>
                        <p className={classes.memberDesignation}>
                            {member.Designation}
                        </p>
                        <p className={classes.memberEmail}>{member.Email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
