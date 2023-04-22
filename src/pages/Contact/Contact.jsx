import "./contact.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import linkedin from "../../assets/linkedin.svg";

const Contact = () => {
  return (
    <section className="contactContainer">
      <div className="content">
        <h1>Let's talk!</h1>
        <div className="email">
          <div className="icon">
            <span className="material-symbols-outlined">contact_mail</span>
          </div>
          <div className="tag">
            <p>Email</p>
          </div>
        </div>
        <div className="calendly">
          <div className="icon">
            <span className="material-symbols-outlined">event</span>
          </div>
          <div className="tag">
            <p>Book time</p>
          </div>
        </div>
        <div className="linkedIn">
          <div className="icon">
            <img src={linkedin} alt="" />
          </div>
          <div className="tag">
            <p>Connect</p>
          </div>
        </div>
        <div className="formContainer">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
