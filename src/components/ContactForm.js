import React, { useState } from 'react';
import './ContactForm.css'; // Ensure this CSS file has appropriate styles

const ContactForm = () => {
  // Initial state for form data
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    vin: '',
    email: '',
    country: '',
    type: '',
    question_or_comment: '',
    agree_to_privacy_policy: false,
  });

  // State to handle error and submission messages
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Handle input change events
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Placeholder URL for your Power Automate endpoint
  
    const powerAutomateEndpoint = 
    'https://prod-46.southeastasia.logic.azure.com:443/workflows/9ba6c356db1a4726bd912540eb8116bb/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=CWGHk3tRx_JXXditPGIIFzGcrHoEBOXuBbhJup__u8A';

    try {
      const response = await fetch(powerAutomateEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form and show success message
        setFormData({
          name: '',
          mobile: '',
          vin: '',
          email: '',
          country: '',
          type: '',
          question_or_comment: '',
          agree_to_privacy_policy: false,
        });
        setSubmitted(true);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
      console.error('Error during form submission:', error);
    }
  };

  return (
    <>
      <main>
        <section className="contact-form">
          <h1>CONTACT US</h1>
          <p>
            Should you have any inquiries or suggestions, please inform us by filling in the fields below or send the following information to email
            <a href="mailto:support@evrabbit.com"> support@evrabbit.com</a>. We are committed to providing you an effective and timely response.
          </p>
          {submitted ? (
            <div className="success-message">
              Your response has been submitted. Thank you!
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group horizontal-group">
                <input type="text" name="name" placeholder="*NAME" value={formData.name} onChange={handleInputChange} required />
                <input type="text" name="mobile" placeholder="*MOBILE NO." value={formData.mobile} onChange={handleInputChange} required />
              </div>
              <div className="form-group horizontal-group">
                <input type="text" name="vin" placeholder="*VIN/ID: Enter your VIN or 'none'" value={formData.vin} onChange={handleInputChange} required />
                <input type="email" name="email" placeholder="*EMAIL" value={formData.email} onChange={handleInputChange} required />
              </div>
              <div className="form-group horizontal-group">
                <input type="text" name="country" placeholder="*COUNTRY" value={formData.country} onChange={handleInputChange} required />
                <select name="type" value={formData.type} onChange={handleInputChange} required>
                  <option value="" disabled>*TYPE</option>
                  <option value="question">Question</option>
                  <option value="comment">Comment</option>
                  <option value="complaint">Complaint</option>
                </select>
              </div>
              <div className="form-group horizontal-group">
                <textarea name="question_or_comment" placeholder="*QUESTION/COMMENT" value={formData.question_or_comment} onChange={handleInputChange} required></textarea>
              </div>
              <div className="form-group checkbox-group">
                <input type="checkbox" name="agree_to_privacy_policy" id="privacy-policy" checked={formData.agree_to_privacy_policy} onChange={handleInputChange} required />
                <label style={{marginRight:'5rem'}} htmlFor="privacy-policy">I agree to the <a href="#">Privacy Policy</a></label>
              </div>
              {error && <div className="error-message">{error}</div>}
              <button className='contact-submit-button' type="submit">SUBMIT</button>
            </form>
          )}
        </section>
      </main>
    </>
  );
};

export default ContactForm;