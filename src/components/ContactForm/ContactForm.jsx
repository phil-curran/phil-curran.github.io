import "./contactForm.css";

const ContactForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Email form coming soon!");
  };

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

      <div className="message">
        <label className="messageLabel" htmlFor="message">
          Message:
        </label>
        <textarea id="message" className="messageField"></textarea>
      </div>

      <div className="submitBtn">
        <button onClick={handleFormSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default ContactForm;
