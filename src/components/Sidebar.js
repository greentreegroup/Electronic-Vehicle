import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/signin');
        setMenuOpen(false);
    };

    const handleSignUpClick = () => {
        navigate('/signup');
        setMenuOpen(false);
    };

    const handleProfileClick = () => {
        // Handle profile logic here
        // For example: navigate('/profile');
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="sidebar">
            <ul className="sidebar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/listings" className="nav-link">Listings</Link>
                </li>
                <li className="nav-item">
                    <Link to="/track-record" className="nav-link">Track Record</Link>
                </li>
                <li className="nav-item">
                    <Link to="/HelpCenter2" className="nav-link">Help Center</Link>
                </li>
            </ul>
            <div className={`auth-menu ${menuOpen ? 'open' : ''}`}>
                <button onClick={toggleMenu} className="menu-icon">
                    ☰
                </button>
                <ul className="menu-dropdown">
                    <li className="menu-item" onClick={handleSignInClick}>Sign In</li>
                    <li className="menu-item" onClick={handleSignUpClick}>Sign Up</li>
                    <li className="menu-item" onClick={handleProfileClick}>Profile</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;