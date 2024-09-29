import React, { useState } from "react";
import "./ContactForm.css"; // Link to the new CSS file
import { countries } from "./countries";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    vin: "",
    email: "",
    country: "",
    type: "",
    question_or_comment: "",
    agree_to_privacy_policy: false,
  });

  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const powerAutomateEndpoint =
      "https://prod-46.southeastasia.logic.azure.com:443/workflows/9ba6c356db1a4726bd912540eb8116bb/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=CWGHk3tRx_JXXditPGIIFzGcrHoEBOXuBbhJup__u8A";

    try {
      const response = await fetch(powerAutomateEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          mobile: "",
          vin: "",
          email: "",
          country: "",
          type: "",
          question_or_comment: "",
          agree_to_privacy_policy: false,
        });
        setSubmitted(true);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("Error during form submission:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="contact-form">
        <h1>Contact Us</h1>
        <p>
          Should you have any inquiries or suggestions, please fill out the form below or email us at 
          <a href="mailto:support@evrabbit.com"> support@evrabbit.com</a>. We will get back to you shortly.
        </p>
        {submitted ? (
          <div className="success-message">
            Thank you! Your submission has been received.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="*Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="mobile"
                placeholder="*Mobile No."
                value={formData.mobile}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="vin"
                placeholder="*VIN/ID (or 'none')"
                value={formData.vin}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="*Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                {countries.map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  *Type
                </option>
                <option value="question">Question</option>
                <option value="comment">Comment</option>
                <option value="complaint">Complaint</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="question_or_comment"
                placeholder="*Question/Comment"
                value={formData.question_or_comment}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                name="agree_to_privacy_policy"
                id="privacy-policy"
                checked={formData.agree_to_privacy_policy}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="privacy-policy">
                I agree to the <a href="#">Privacy Policy</a>
              </label>
            </div>
            {error && <div className="error-message">{error}</div>}
            <button
              className={`contact-submit-button ${isSubmitting ? "submitting" : ""}`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
};

export default ContactForm;