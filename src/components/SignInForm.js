import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import './SignInForm.css';

const SignInPage = () => {
    const [formData, setFormData] = useState({
        email_address: '',
        Password: ''
    });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        const powerAutomateEndpoint = 'https://prod-25.southeastasia.logic.azure.com:443/workflows/4cf63c66c18d4326a3be6de024f950a3/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=cANk_84AqvhzTZk8A2K7Lj6G8w-zNoixqp5qW94akpc';

        try {
            const response = await fetch(powerAutomateEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const userId = await response.text();
                Cookies.set('isLoggedIn', 'true', { expires: 7 });
                navigate(`/userProfile/${userId}`);
            } else if (response.status === 401 || response.status === 403) {
                setError('Incorrect email or password. Please try again.');
            } else if (response.status === 404) {
                setError('User not found. Please check your email address.');
            } else {
                setError('An error occurred. Please try again later.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="sign-in-page">
            <div className="sign-in-container">
                <h1>Welcome - Join Us</h1>
                <p>Sign in to access your GreenTree account</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email_address">Email</label>
                        <input
                            type="email"
                            id="email_address"
                            name="email_address"
                            value={formData.email_address}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input
                            type="password"
                            id="Password"
                            name="Password"
                            value={formData.Password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <button type="submit" className="submit-btn" disabled={isLoading}>
                        {isLoading ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>
                <div className="additional-options">
                    <Link to="/forgot-password" className="forgot-password">Forgot your password?</Link>
                    <p className="create-account">
                        New to GreenTree? <Link to="/signup">Create an account</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;