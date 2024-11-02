import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import './SignUpForm.css';
import bcrypt from 'bcryptjs';

const saltRounds = 10;

const SignUpForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        First_Name: '',
        Last_Name: '',
        Email_addres: '',
        password: '',
        password_repet: '',
        phone_number: '',
        Is_developer: false,
        country: '',
        state: '',
        city: ''
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.password_repet) {
            setError('Error: Passwords do not match.');
            return;
        }

        const url =
            'https://prod-63.southeastasia.logic.azure.com:443/workflows/298505686ab047b881892eb5678736d1/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=uDGzv3sDKOnM1EuAMt6FsOY2FhgmNUQYY6M4FeiAwgY';

        const headers = {
            'Content-Type': 'application/json',
        };

        const body = JSON.stringify({
            ...formData
        });

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: body,
            });

            if (response.ok) {
                console.log('Data has been sent successfully.');
                onClose();
            } else {
                console.error('Error while sending data:', response.statusText);

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
                <h2>Sign Up</h2>
                <button className="close-btn" onClick={onClose}>
                    ✖
                </button>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="First_Name">First Name:</label>
                        <input
                            type="text"
                            id="First_Name"
                            name="First_Name"
                            placeholder="First Name"
                            value={formData.First_Name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Last_Name">Last Name:</label>
                        <input
                            type="text"
                            id="Last_Name"
                            name="Last_Name"
                            placeholder="Last Name"
                            value={formData.Last_Name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Email_addres">Email:</label>
                        <input
                            type="email"
                            id="Email_addres"
                            name="Email_addres"
                            placeholder="Email"
                            value={formData.Email_addres}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Country:</label>
                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
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
                            required
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
                            required
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

                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password_repet">Repeat Password:</label>
                        <input
                            type="password"
                            id="password_repet"
                            name="password_repet"
                            placeholder="Repeat Password"
                            value={formData.password_repet}
                            onChange={handleChange}
                            required
                        />
                    </div>
                      
                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="submit-bton">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;