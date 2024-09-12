
import React, { useState } from 'react';
import './ChangeInfoForm.css';

const ChangeInfoForm = ({ onClose, user_id }) => {
  const [formData, setFormData] = useState({
    id: user_id,
    First_Name: '',
    Last_Name: '',
    email_addres: '',
    phone_number: '',
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
      'https://prod-28.southeastasia.logic.azure.com:443/workflows/55d037b6f649479bbacdd548c65947dd/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1EXt4OGfLWyO1s1Yh4oheOSFRK5jYFVyAjVmaWCvHqY';

    const headers = {
      'Content-Type': 'application/json',
    };

    // Convert fields that should be integers to numbers
    const body = JSON.stringify({
      ...formData,
      id: parseInt(formData.id), // Assuming id should be an integer
      // Add other fields that should be integers here
    });

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: headers,
        body: body,
      });

      const responseText = await response.text();

      if (response.ok) {
        console.log('Data has been sent successfully.');
        onClose();
      } else {
        console.error('Error while sending data:', response.statusText, responseText);

        if (response.status === 403) {
          setError('Error: Email already exists. Please use a different email.');
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
        <h2>Change your data</h2>
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="First_Name"
              value={formData.First_Name}
              onChange={handleChange}
            />
          </label>

          <label>
            Last Name:
            <input
              type="text"
              name="Last_Name"
              value={formData.Last_Name}
              onChange={handleChange}
            />
          </label>

          <label>
            Email Address:
            <input
              type="email"
              name="email_addres"
              value={formData.email_addres}
              onChange={handleChange}
            />
          </label>

          <label>
            Phone Number:
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </label>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="submit-btn">
            Update Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangeInfoForm;