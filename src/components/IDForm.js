import React, { useState } from 'react';
import "./IDForm.css";

const IDForm = ({ onClose }) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleCapture = () => {
        // Function to trigger photo capture
        // Depending on implementation, you might use HTML5 getUserMedia API here
    };

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('File upload failed');
            }

            const result = await response.json();
            console.log(result);
            alert('File uploaded successfully!');
            onClose(); // Assuming onClose is a prop passed to close the form
        } catch (error) {
            console.error('Error uploading file:', error);
            alert(error.message);
        }
    };

    return (
        <div className="id-form-container">
            <div className="id-form">
                <h2>We need additional information to finalize your identity verification</h2>
                <button className="close-btn" onClick={onClose}>X</button>
                <div>
                    <button onClick={handleCapture}>Take a photo</button>
                    <p>You can use your phone to complete this process. We will send you a text with a link to continue.</p>
                </div>
                <div>
                    <input type="file" accept="image/*" onChange={handleFileSelect} />
                    <button onClick={handleUpload}>Upload a photo</button>
                    <p>If you already have a photo of your ID saved to your device, you can upload it directly.</p>
                </div>
                <div>
                    <a href="/upload-guidelines">Upload guidelines</a>
                </div>
                <footer>
                    <p>Secure SSL Connection</p>
                </footer>
            </div>
        </div>
    );
};

export default IDForm;
