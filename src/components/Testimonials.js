import React, { useState, useEffect } from 'react';
import './Testimonials.css'; // Import CSS file for styling

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(null);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch testimonials on component mount
    fetchTestimonials();

    // Fetch testimonials every day (86400000 milliseconds = 24 hours)
    const fetchInterval = setInterval(fetchTestimonials, 86400000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(fetchInterval);
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('https://prod-24.southeastasia.logic.azure.com:443/workflows/de26e291ff5b440aa950ff2a0ba8b535/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=ZYZTFw1DcTQZDrPrgBaiTzxKPE2WXgTOdLnAfMbwFN8', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // Include any data you need to send with the PATCH request
        })
      });
      if (!response.ok) {
        throw new Error('Failed to fetch testimonials');
      }
      const data = await response.json();
      setTestimonials(data);
      if (!currentTestimonial) {
        // Set the current testimonial only if there isn't one already
        setCurrentTestimonial(data[0]);
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  return (
    <div className="testimonials-container"> {/* Container for testimonials */}
      {currentTestimonial ? ( // Check if there is a current testimonial
        <div className="testimonial-card">
          <p>Name: {currentTestimonial.Name}</p>
          <p>Date: {currentTestimonial.Date}</p>
          <p>Comment: {currentTestimonial.Comment}</p>
        </div>
      ) : (
        <p>Loading testimonials...</p> // Display loading message while fetching data
      )}
    </div>
  );
}

export default Testimonials;
