import React, { useState } from 'react';
import IDForm from './IDForm'; // Ensure this import path is correct
import './AddressForm.css'; // Ensure you have the corresponding CSS file

const AddressForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    primaryAddress: '',
    addressCont: '',
    city: '',
    state: '',
    zipCode: '',
    dateOfBirth: '',
    socialSecurityNumber: '',
    acceptTerms: false, // Added for regulamin checkbox
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const finalValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: finalValue,
    }));
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      setError('You must accept the terms and conditions to submit this form.');
      return;
    }

    const age = calculateAge(formData.dateOfBirth);
    if (age < 18) {
      setError('You must be at least 18 years old to submit this form.');
      return;
    }

    const payload = {
      user_id: 6,
      primary_address: formData.primaryAddress,
      address_cont: formData.addressCont,
      city: formData.city,
      state: formData.state,
      zip_code: formData.zipCode,
      date_of_birth: formData.dateOfBirth,
      // socialSecurityNumber is intentionally omitted
    };

    try {
      const response = await fetch('https://prod-60.southeastasia.logic.azure.com/workflows/3be66a2d63ca499daad1a40398208861/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=7wx2iaVTb6bqVhyOhskBq5q4DeUvde6xms2uAmZ6sdA', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred during submission. Please try again later.');
    }
  };

  if (isSubmitted) {
    return <IDForm onClose={onClose} />;
  }

  return (
    <div className="address-form-container">
      <div className="address-form">
        <h2>Personal Information</h2>
        <button className="close-btn" onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="primaryAddress">Primary Address:</label>
            <input
              type="text"
              id="primaryAddress"
              name="primaryAddress"
              placeholder="Primary Address"
              value={formData.primaryAddress}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="addressCont">Address (cont):</label>
            <input
              type="text"
              id="addressCont"
              name="addressCont"
              placeholder="Apartment, suite, etc."
              value={formData.addressCont}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="state">State:</label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select a State</option>
              <option value="AL">Alabama</option>
<option value="AK">Alaska</option>
<option value="AZ">Arizona</option>
<option value="AR">Arkansas</option>
<option value="CA">California</option>
<option value="CO">Colorado</option>
<option value="CT">Connecticut</option>
<option value="DE">Delaware</option>
<option value="FL">Florida</option>
<option value="GA">Georgia</option>
<option value="HI">Hawaii</option>
<option value="ID">Idaho</option>
<option value="IL">Illinois</option>
<option value="IN">Indiana</option>
<option value="IA">Iowa</option>
<option value="KS">Kansas</option>
<option value="KY">Kentucky</option>
<option value="LA">Louisiana</option>
<option value="ME">Maine</option>
<option value="MD">Maryland</option>
<option value="MA">Massachusetts</option>
<option value="MI">Michigan</option>
<option value="MN">Minnesota</option>
<option value="MS">Mississippi</option>
<option value="MO">Missouri</option>
<option value="MT">Montana</option>
<option value="NE">Nebraska</option>
<option value="NV">Nevada</option>
<option value="NH">New Hampshire</option>
<option value="NJ">New Jersey</option>
<option value="NM">New Mexico</option>
<option value="NY">New York</option>
<option value="NC">North Carolina</option>
<option value="ND">North Dakota</option>
<option value="OH">Ohio</option>
<option value="OK">Oklahoma</option>
<option value="OR">Oregon</option>
<option value="PA">Pennsylvania</option>
<option value="RI">Rhode Island</option>
<option value="SC">South Carolina</option>
<option value="SD">South Dakota</option>
<option value="TN">Tennessee</option>
<option value="TX">Texas</option>
<option value="UT">Utah</option>
<option value="VT">Vermont</option>
<option value="VA">Virginia</option>
<option value="WA">Washington</option>
<option value="WV">West Virginia</option>
<option value="WI">Wisconsin</option>
<option value="WY">Wyoming</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="zipCode">Zip Code:</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              placeholder="Zip Code"
              maxLength="5"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="socialSecurityNumber">Social Security Number:</label>
            <input
              type="text"
              id="socialSecurityNumber"
              name="socialSecurityNumber"
              placeholder="XXX-XX-XXXX"
              maxLength="11"
              value={formData.socialSecurityNumber}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
            />
            <label htmlFor="acceptTerms">I accept the <a href="/statute" target="_blank">terms and conditions</a>.</label>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
