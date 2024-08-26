//SignUpForm.js
import React, { useState } from 'react';
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

        if (formData.password !== formData.password_repet) {
            setError('Error: Passwords do not match.');
            return;
        }

        const hashedPassword = await bcrypt.hash(formData.password, saltRounds);

        const url =
            'https://prod-59.southeastasia.logic.azure.com:443/workflows/0091e6cd1300433eaedd67486ec575fb/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=hfjJjtqRIk7oL1JbPl8MP50fDfo6gC6yv-d4marzYxg';

        const headers = {
            'Content-Type': 'application/json',
        };

        const body = JSON.stringify({
            ...formData,
            password: hashedPassword,
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

                // Dodaj obsługę błędu 403 (Forbidden)
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
                    X
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
                        <label htmlFor="phone_number">Phone Number:</label>
                        <input
                            type="text"
                            id="phone_number"
                            name="phone_number"
                            placeholder="Phone Number"
                            value={formData.phone_number}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Is_developer">Are you a developer?</label>
                        <input
                            type="checkbox"
                            id="Is_developer"
                            name="Is_developer"
                            checked={formData.Is_developer}
                            onChange={() =>
                                setFormData((prevData) => ({
                                    ...prevData,
                                    Is_developer: !prevData.Is_developer,
                                }))
                            }
                        />
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" className="submit-btn">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;