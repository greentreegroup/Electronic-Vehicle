import React, { useState } from 'react';
import './SignUpForm.css';

const ResetPasswordForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email_addres: '', // Changed to lowercase to match JSON schema
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      'https://prod-52.southeastasia.logic.azure.com:443/workflows/6f28b53042394fe395b4884f8ea2f7dc/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=r-mg-hvPyuMbiMYSKp-QG0SwbOywAqha2GWZnYjYQs8';

    const headers = {
      'Content-Type': 'application/json',
    };

    const body = JSON.stringify({
      email_addres: formData.email_addres, // Changed to lowercase to match JSON schema
    });

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: headers,
        body: body,
      });

      if (response.ok) {
        console.log('Data has been sent successfully.');
        onClose();
      } else {
        console.error('Error while sending data:', response.statusText);

        if (response.status === 404) {
          setError('Error: Email does not exist.');
          console.log('Email does not exist.'); // Dodana instrukcja logowania do konsoli
        } else {
          setError('An error occurred. Please try again later.');
        }
      }
    } catch (error) {
      console.error('Error:', error.message);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="signup-form-container">
      <div className="signup-form">
        <h2>Reset Password</h2>
        <button className="close-btn" onClick={onClose}></button>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email_addres">Email:</label>
            <input
              type="email"
              id="email_addres"
              name="email_addres"
              placeholder="Email"
              value={formData.email_addres}
              onChange={handleChange}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="submit-btn">
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;