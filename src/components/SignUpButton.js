//SignUpButton.js
import React from 'react';


const SignUpButton = ({ onClick }) => {
    return (
        <button className="sign-up-btn" onClick={onClick}>
            Sign Up
        </button>
    );
};

export default SignUpButton;