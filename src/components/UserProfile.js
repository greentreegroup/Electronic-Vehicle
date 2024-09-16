import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChangeInfoForm from './ChangeInfoForm';
import './UserProfile.css';
import Cookies from 'js-cookie';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isChangeInfoOpen, setChangeInfoOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('personal');

  const { userId } = useParams();
  const apiUrl = `https://prod-04.southeastasia.logic.azure.com/workflows/59546a02895f4ab2b5f2c2cde57f2ed6/triggers/manual/paths/invoke/userId/${userId}?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=LElgT0NEd674m9Pm0o7ybQNGakf-58DkcaLM-KX1p6I`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const data = await response.json();
          setUserData(data.body[0]);
        } else {
          setError('Failed to fetch user data');
        }
      } catch (error) {
        setError('An error occurred while fetching user data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl]);

  const handleOpenChangeInfo = () => {
    setChangeInfoOpen(true);
  };

  const handleCloseChangeInfo = () => {
    setChangeInfoOpen(false);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const onSignOutClick = () => {
    window.location.href='/';
    Cookies.remove('id');
  };


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="user-profile">
      <main>
        <aside>
          <h3>{userData?.first_name} {userData?.last_name}</h3>
          <p>{userData?.email_address}</p>
          <ul>
            <li className={activeSection === 'personal' ? 'active' : ''} onClick={() => handleSectionClick('personal')}>
              Personal Information
            </li>
            <li className={activeSection === 'billing' ? 'active' : ''} onClick={() => handleSectionClick('billing')}>
              Billing & Payments
            </li>
            <li className={activeSection === 'order' ? 'active' : ''} onClick={() => handleSectionClick('order')}>
              Order History
            </li>
          </ul>
        </aside>
        <section className="profile-content">
          <h1>EVrabbit Account</h1>
          <button className="sign-out" onClick={onSignOutClick}>Sign out</button>
          
          {activeSection === 'personal' && (
            <div>
              <h2>Personal Information</h2>
              <p>Manage your personal information, including phone numbers and email address where you can be contacted.</p>
              <div className="info-grid">
                <div className="info-item">
                  <h4>Name</h4>
                  <p>{userData?.first_name} {userData?.last_name}</p>
                </div>
                <div className="info-item">
                  <h4>Country/Region</h4>
                  <p>{userData?.country || 'Not provided'}</p>
                </div>
                <div className="info-item">
                  <h4>Phone</h4>
                  <p>{userData?.phone_number || 'Not provided'}</p>
                </div>
                <div className="info-item">
                  <h4>Date of Birth</h4>
                  <p>{userData?.date_of_birth || 'Not provided'}</p>
                </div>
                <div className="info-item">
                  <h4>Language</h4>
                  <p>{userData?.language || 'English'}</p>
                </div>
                <div className="info-item">
                  <h4>Contact</h4>
                  <p>{userData?.email_address}</p>
                </div>
              </div>
              <button onClick={handleOpenChangeInfo}>Update Info</button>
              {isChangeInfoOpen && <ChangeInfoForm user_id={userId} onClose={handleCloseChangeInfo} />}
            </div>
          )}

          {activeSection === 'billing' && (
            <div>
              <h2>Billing & Payments</h2>
              <p>Manage your billing methods, payment preferences, and view your transaction history.</p>
              <div className="info-grid">
                <div className="info-item">
                  <h4>Billing Method</h4>
                  <p>Visa ending in ****1234</p>
                </div>
                <div className="info-item">
                  <h4>Next Payment Due</h4>
                  <p>April 25, 2024</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'order' && (
            <div>
              <h2>Order History</h2>
              <p>View your past orders and track their current status.</p>
              <div className="info-grid">
                <div className="info-item">
                  <h4>Order #123456</h4>
                  <p>Delivered on March 15, 2024</p>
                </div>
                <div className="info-item">
                  <h4>Order #789101</h4>
                  <p>In transit - Estimated delivery: April 20, 2024</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default UserProfile;
