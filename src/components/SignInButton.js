//SignInButton.js
import React from 'react';


const SignInButton = ({ onClick }) => {
    return (
        <button className="sign-in-btn" onClick={onClick}>
            Sign In
        </button>
    );
};

export default SignInButton;