import Faq from "../Faq/Faq";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={classes.contact}>
      <div className={classes.contactBox}>
        <div className={classes.contentBox}>
          <Faq />
          {/* <div className={classes.persons}>
            <div className={classes.personBox}>
              <h3 className={classes.personHeading}>Shamsudheen</h3>
              <div className={classes.details}>
                <p>
                  Chairman<br></br>Union KMCT
                </p>
                <a className={classes.anchor} href="tel:+917012824370">
                  +91 7012 824 370
                </a>
              </div>
            </div>
            <div className={classes.personBox}>
              <h3 className={classes.personHeading}>Sithara Beegam</h3>
              <div className={classes.details}>
                <p>
                  Vice Chairman<br></br>Union KMCT
                </p>
                <a className={classes.anchor} href="tel:+918592002134">
                  +91 8592 002 134
                </a>
              </div>
            </div>
          </div> */}

          <div className={classes.mapBox}>
            <iframe
              className={classes.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773.4305385019143!2d90.30111683761609!3d26.477877003291606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3758f4d277d13e8d%3A0x233749495bfdb465!2sCentral%20Institute%20of%20Technology%2C%20Kokrajhar!5e0!3m2!1sen!2sin!4v1734540522076!5m2!1sen!2sin"
              // width="600"
              // height="450"
              // style="border:0;"
              // allowfullscreen=""
              title="dypcoemap"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
