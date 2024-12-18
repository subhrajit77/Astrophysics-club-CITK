import { useState } from "react";
import classes from "./Faq.module.css";

const questions = [
    {
        question: "How can I join Astrophysics club?",
        answer: "You can join the Astrophysics Club by signing up during membership drives or attending our orientation sessions. Stay updated through our social media!",
    },
    {
        question: "Do I need prior knowledge to join?",
        answer: "No, the club is open to all levels of interest, from beginners to space enthusiasts.",
    },
    {
        question: "What does the club organize? ",
        answer: "The club hosts stargazing sessions, workshops, guest lectures, and fun discussions on celestial phenomena.",
    },
    {
        question: "How can I participate in the event?",
        answer: "Explore various events on the club's website or social media pages and register for the same",
    },
];

const Faq = () => {
    const [clicked, setClicked] = useState(null);

    const toggle = (i) => {
        if (clicked === i) {
            return setClicked(null);
        }

        setClicked(i);
    };

    return (
        <section className={classes.faqSection}>
            <div className={classes.heading}>FAQ</div>
            <div className={classes.faq}>
                {questions.map((ques, i) => {
                    return (
                        <div
                            className={classes.single}
                            onClick={() => toggle(i)}
                        >
                            <div className={classes.question}>
                                {ques.question}
                            </div>
                            <div
                                className={`${
                                    clicked === i
                                        ? classes.answer
                                        : classes.noAnswer
                                }`}
                            >
                                {ques.answer}
                            </div>
                            <span className={classes.btn}>+</span>
                        </div>
                    );
                })}

                {/* <div className={classes.single}>
                <div className={classes.question}>How are you?</div>
                <div className={classes.answer}>I am fine</div>
                <span className={classes.btn}>+</span>
            </div> */}
            </div>
        </section>
    );
};

export default Faq;
