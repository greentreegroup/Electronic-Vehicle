import React, { useState } from 'react';
import './Dealer.css';
import './ResetPasswordForm.css';
import SignInButton from './SignInButton';
import ResetPassword from './ResetPasswordForm';
import SignUpForm from './SignUpForm'; // Import the SignUpForm component
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection      
import UserProfile from './UserProfile';
import Cookies from 'js-cookie';

const SignInForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        email_address: '',
        Password: ''
    });
    const [resetPasswordClicked, setResetPasswordClicked] = useState(false);
    const [createAccountClicked, setCreateAccountClicked] = useState(false); // New state for Create Account

    const navigate = useNavigate(); // Hook for navigation
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const powerAutomateEndpoint = 'https://prod-25.southeastasia.logic.azure.com:443/workflows/4cf63c66c18d4326a3be6de024f950a3/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=cANk_84AqvhzTZk8A2K7Lj6G8w-zNoixqp5qW94akpc';

        try {
            const response = await fetch(powerAutomateEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email_addres: formData.email_address,
                    Password: formData.Password,
                }),
            });

            // Handle the response based on your requirements
            if (response.ok) {
                const userId = await response.text(); // Assuming the response is just a plain text
                console.log('Login successful!');
                console.log('Response data:', userId); // Log the user ID
                onClose(); // Close the form or redirect to another page
                Cookies.set('isLoggedIn', 'true', { expires: 1000*60*4 }); // NEW: Set cookie on successful login
                Cookies.set('id', userId, {expires: 1000*60*4} ) // 1000*60*4 = 4 hour cookie from login time
                navigate(`/userProfile/${userId}`);
            } else if (response.status === 401 || response.status === 403) {
                console.error('Login failed: Unauthorized access');
                setError('Incorrect email or password. Please try again.');
            } else if (response.status === 404) {
                console.error('Login failed: User not found');
                setError('Incorrect email or password. Please try again.');
            } else {
                console.error('Login failed!');
                setError('An error occurred. Please try again later.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    const handleForgetPasswordClick = () => {
        setResetPasswordClicked(true);
    };

    const handleCreateAccountClick = () => {
        setCreateAccountClicked(true); // Set state to true for Create Account
    };

    return (
        <div className="signin-form-container">
            <div className="signin-form">
                {resetPasswordClicked ? (
                    <ResetPassword onClose={() => setResetPasswordClicked(false)} />
                ) : createAccountClicked ? (
                    <SignUpForm onClose={() => setCreateAccountClicked(false)} /> // Conditionally render SignUpForm
                ) : (
                    <>
                        <h2>Welcome Dealer</h2>
                        <button className="close-btn" onClick={onClose}>✖</button>
                        <p>Sign in to access your EVrabbit account.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email_address"
                                    placeholder="Email"
                                    value={formData.email_address}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="Password"
                                    placeholder="Password"
                                    value={formData.Password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {error && <div className="error-message">{error}</div>}
                            <div className="forgot-password">
                                <a href="#" onClick={handleForgetPasswordClick}>Forgot your password?</a>
                            </div>

                            <button type="submit" className="submit-bton">Sign In</button>
                        </form>
                        <div className="create-account">
                            <p>
                                New to EVrabbit? <a href="#" onClick={handleCreateAccountClick}>Create an account</a> 
                            </p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SignInForm;
