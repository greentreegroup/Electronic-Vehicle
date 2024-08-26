
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChangeInfoForm from './ChangeInfoForm';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isChangeInfoOpen, setChangeInfoOpen] = useState(false);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      {userData && (
        <div>
          <p>Email: {userData.email_address}</p>
          <p>First Name: {userData.first_name || 'N/A'}</p>
          <p>Last Name: {userData.last_name || 'N/A'}</p>
          <p>Phone Number: {userData.phone_number || 'N/A'}</p>
          <p>Password: {userData.password || 'N/A'}</p>

          {/* Button to open Change Info form */}
          <button onClick={handleOpenChangeInfo}>Change Info</button>

          {/* Render the Change Info form if open and pass user_id as prop */}
          {isChangeInfoOpen && <ChangeInfoForm user_id={userId} onClose={handleCloseChangeInfo} />}
        </div>
      )}
    </div>
  );
};

export default UserProfile;