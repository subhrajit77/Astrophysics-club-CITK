import React from "react";
import classes from "./Hero.module.css";
import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import text_img from "../../../src/assets/TECHCRACY- WHITE.png";

const Hero = () => {
  // const [countDays, setDays] = useState(false);
  // const [countHours, setHours] = useState(false);
  // const [countMinutes, setMinutes] = useState(false);
  // const [countSeconds, setSeconds] = useState(false);

  // let interval = useRef();

  // const startTimer = () => {
  //   const countdownDate = new Date("February 13 2023 18:00:00").getTime();

  //   interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countdownDate - now;

  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor(
  //       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );
  //     const minutes = Math.floor((distance / 1000 / 60) % 60);
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     if (distance < 0) {
  //       //
  //       clearInterval(interval);
  //     } else {
  //       setDays(days);
  //       setHours(hours);
  //       setMinutes(minutes);
  //       setSeconds(seconds);
  //     }
  //   }, 1000);
  // };

  // useEffect(() => {
  //   startTimer();
  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

  return (
    <section id="home" className={classes.hero}>
      <div className={classes.herobox}>
        <div className={classes.headerbox}>
          <h1 className={classes.heading}>Astrophysics Club</h1>  
          {/* <img src={} className={classes.text_img} alt="text_img" /> */}

          <h4 className={classes.caption}>Exploring the Cosmos, Illuminating Minds!</h4>
          <Link
            className={classes.anchorBtn}
            // target="_blank"
            rel="noopener noreferrer"
            to="/events"
          >
            <Button
              link="/events"
              label="Explore Our Events"
              className={classes.btn}
            ></Button>
          </Link>
        </div>

        {/* <div className={classes.countdownbox}>
          <div className={classes.countdown}>
            <p>{countDays}</p>
            <p>
              <small>days</small>
            </p>
          </div>

          <span className={classes.column}>:</span>

          <div className={classes.countdown}>
            <p>{countHours}</p>
            <p>hours</p>
          </div>

          <span className={classes.column}>:</span>

          <div className={classes.countdown}>
            <p>{countMinutes}</p>
            <p>min</p>
          </div>

          <span className={classes.column}>:</span>
          <div className={classes.countdown}>
            <p>{countSeconds}</p>
            <p>sec</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
