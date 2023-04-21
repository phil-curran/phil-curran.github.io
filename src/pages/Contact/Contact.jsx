import "./contact.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import linkedin from "../../assets/linkedin.svg";

const Contact = () => {
  return (
    <section className="contactContainer">
      <div className="content">
        <h1>Let's talk!</h1>
        <div className="email">
          <p>
            <span className="material-symbols-outlined">contact_mail</span>
          </p>
          <p>Email</p>
        </div>
        <div className="calendly">
          <p>
            <span className="material-symbols-outlined">event</span>
          </p>
          <p>Book time</p>
        </div>
        <div className="linkedIn">
          <p>
            <img src={linkedin} alt="" />
          </p>
          <p>Connect</p>
        </div>
        <div className="formContainer">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
