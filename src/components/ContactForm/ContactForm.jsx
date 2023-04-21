import "./contactForm.css";

const ContactForm = () => {
  return (
    <form className="contactForm">
      <div className="name">
        <label htmlFor="name">Name:</label>
        <input
          className="u-full-width"
          type="text"
          name="name"
          id="name"
          required
        />
      </div>
      <div className="emailField">
        <label htmlFor="emailField">Email:</label>
        <input
          className="u-full-width"
          type="text"
          name="emailField"
          id="emailField"
          required
        />
      </div>
      <div className="subject">
        <label htmlFor="subject">Subject:</label>
        <input
          className="u-full-width"
          type="text"
          name="subject"
          id="subject"
          required
        />
      </div>

      <div>
        <label className="messageLabel" htmlFor="message">
          Message:
        </label>
        <textarea id="message" className="message"></textarea>
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
