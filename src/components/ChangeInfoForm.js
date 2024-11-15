import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import './ChangeInfoForm.css';

const ChangeInfoForm = ({ onClose, user_id }) => {
  const [formData, setFormData] = useState({
    id: user_id,
    First_Name: '',
    Last_Name: '',
    email_addres: '',
    phone_number: '',
    country: '',
    state: '',
    city:'',
    region: '',
    address: '',
    language: ''
  });

  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
      // Load all countries on component mount
      setCountries(Country.getAllCountries());
  }, []);

  useEffect(() => {
      // Load states when country changes
      if (formData.country) {
          setStates(State.getStatesOfCountry(formData.country));
          setFormData(prev => ({ ...prev, state: '', city: '' }));
      }
  }, [formData.country]);

  useEffect(() => {
      // Load cities when state changes
      if (formData.state && formData.country) {
          setCities(City.getCitiesOfState(formData.country, formData.state));
          setFormData(prev => ({ ...prev, city: '' }));
      }
  }, [formData.state, formData.country]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const reloadAfterUpdate = async () => {
    setTimeout(() => {
      window.location.reload(); {/* reload to show updated info */}  
    }, 5000); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      'https://prod-28.southeastasia.logic.azure.com:443/workflows/55d037b6f649479bbacdd548c65947dd/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1EXt4OGfLWyO1s1Yh4oheOSFRK5jYFVyAjVmaWCvHqY';

    const headers = {
      'Content-Type': 'application/json',
    };

    const body = JSON.stringify({
      ...formData,
      id: parseInt(formData.id), // Assuming id should be an integer
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
        reloadAfterUpdate();
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
        <h2>Update Information</h2>
        <button className="close-btnn" onClick={onClose}>
          ✖
        </button>
        <form onSubmit={handleSubmit}>
          <label>
            <span>First Name:</span>
            <input
              type="text"
              name="First_Name"
              value={formData.First_Name}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Last Name:</span>
            <input
              type="text"
              name="Last_Name"
              value={formData.Last_Name}
              onChange={handleChange}
            />
          </label>
          {/* Commented it out until this works */}
          {/* <label>
            <span>Email Address:</span>
            <input
              type="email"
              name="email_addres"
              value={formData.email_addres}
              onChange={handleChange}
            />
          </label> */}
          <label>
            <span>Phone Number:</span>
            <input
              type="tel"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Address:</span>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>
          <label>
            <span>Language:</span>
            <input
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
            />
          </label>
          <div className="form-group">
              <label htmlFor="country">Country:</label>
              <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
              >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                    {country.name}
                </option>
              ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="state">State/Province:</label>
              <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  disabled={!formData.country}
              >
                  <option value="">Select State</option>
                  {states.map((state) => (
                      <option key={state.isoCode} value={state.isoCode}>
                          {state.name}
                      </option>
                  ))}
              </select>
            </div>
            <div className="form-group">
                <label htmlFor="city">City:</label>
                <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    disabled={!formData.state}
                >
                    <option value="">Select City</option>
                    {cities.map((city) => (
                        <option key={city.name} value={city.name}>
                            {city.name}
                        </option>
                    ))}
                </select>
            </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="update-b">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangeInfoForm;
