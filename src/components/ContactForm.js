import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import './ContactForm.css';
import Footer from './Footer';

const ContactPage = () => {
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

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const powerAutomateEndpoint = 'https://prod-46.southeastasia.logic.azure.com:443/workflows/9ba6c356db1a4726bd912540eb8116bb/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=CWGHk3tRx_JXXditPGIIFzGcrHoEBOXuBbhJup__u8A'; 
    try {
      const response = await fetch(powerAutomateEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
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
      } else throw new Error('Failed to submit form');
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <div className="contact-page">
        <h1 className="contact-title">Get in Touch</h1>

        <div className="form-section">
          <div className="message-info">
            <h2>Message Us</h2>
            <p>Have questions? Fill out the form and we'll get back to you as soon as possible.</p>
          </div>

          {submitted ? (
            <div className="success-container">
              <FaCheckCircle className="success-icon" />
              <p className="success-message">Thank you! We'll get back to you soon.</p>
              <div className="success-graphic">
                <div className="success-line"></div>
                <div className="success-circle"></div>
              </div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile No."
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="vin"
                  placeholder="VIN/ID"
                  value={formData.vin}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                />
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled>Select Type</option>
                  <option value="question">Question</option>
                  <option value="comment">Comment</option>
                  <option value="complaint">Complaint</option>
                </select>
              </div>

              <textarea
                name="question_or_comment"
                placeholder="Your Message"
                value={formData.question_or_comment}
                onChange={handleInputChange}
                required
              />

              <div className="form-group checkbox-group">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="agree_to_privacy_policy"
                    checked={formData.agree_to_privacy_policy}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="checkmark"></span>
                  I agree to the <a href="#"> Privacy Policy</a>
                </label>
              </div>

              {error && <div className="error-message">{error}</div>}
              <button className="buttonn" type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          )}
        </div>

        <div className="info-cards">
          <div className="info-card">
            <FaMapMarkerAlt className="icon" />
            <h3>Address</h3>
            <p>4753 N Broadway, Chicago, IL</p>
          </div>
          <div className="info-card">
            <FaPhoneAlt className="icon" />
            <h3>Phone</h3>
            <p>+1 (779) 707-1757</p>
          </div>
          <div className="info-card">
            <FaEnvelope className="icon" />
            <h3>Email</h3>
            <p><a href="mailto:support@evrabbit.com">support@evrabbit.com</a></p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;