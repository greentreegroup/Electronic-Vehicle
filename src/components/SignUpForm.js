import React, { useState } from 'react';
import './SignUpForm.css';
import bcrypt from 'bcryptjs';
import { Country, State, City } from 'country-state-city';
import Select from 'react-select';

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
        country: null,
        state: null,
        city: null,
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCountryChange = (selectedCountry) => {
        setFormData((prevData) => ({
            ...prevData,
            country: selectedCountry,
            state: null, // reset state and city when country changes
            city: null,
        }));
    };

    const handleStateChange = (selectedState) => {
        setFormData((prevData) => ({
            ...prevData,
            state: selectedState,
            city: null, // reset city when state changes
        }));
    };

    const handleCityChange = (selectedCity) => {
        setFormData((prevData) => ({
            ...prevData,
            city: selectedCity,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.password_repet) {
            setError('Error: Passwords do not match.');
            return;
        }

        /* const hashedPassword = await bcrypt.hash(formData.password, saltRounds); */

        const url = 'https://your-backend-api-url';
        const headers = {
            'Content-Type': 'application/json',
        };

        const body = JSON.stringify({
            ...formData,
            /* password: hashedPassword, */
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
                    {/* Existing form fields */}
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

                    <div className="form-group">
                        <label htmlFor="country">Country:</label>
                        <Select
                            id="country"
                            name="country"
                            options={Country.getAllCountries().map((country) => ({
                                value: country.isoCode,
                                label: country.name,
                            }))}
                            value={formData.country}
                            onChange={handleCountryChange}
                            placeholder="Select Country"
                        />
                    </div>

                    {/* State selector */}
                    {formData.country && (
                        <div className="form-group">
                            <label htmlFor="state">State:</label>
                            <Select
                                id="state"
                                name="state"
                                options={State.getStatesOfCountry(formData.country?.value).map((state) => ({
                                    value: state.isoCode,
                                    label: state.name,
                                }))}
                                value={formData.state}
                                onChange={handleStateChange}
                                placeholder="Select State"
                            />
                        </div>
                    )}

                    {/* City selector */}
                    {formData.state && (
                        <div className="form-group">
                            <label htmlFor="city">City:</label>
                            <Select
                                id="city"
                                name="city"
                                options={City.getCitiesOfState(formData.country?.value, formData.state?.value).map(
                                    (city) => ({
                                        value: city.name,
                                        label: city.name,
                                    })
                                )}
                                value={formData.city}
                                onChange={handleCityChange}
                                placeholder="Select City"
                            />
                        </div>
                    )}

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
