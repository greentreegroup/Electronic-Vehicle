import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PartDetail.css';

const PartDetail = () => {
  const { listingId } = useParams();
  const [part, setPart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recommended, setRecommended] = useState([]);
  const [recommendLoading, setRecommendLoading] = useState(true);
  const [recommendError, setRecommendError] = useState(null);
  const [quantity, setQuantity] = useState(1); 

  useEffect(() => {
    const fetchPartData = async () => {
      try {
        const response = await axios.get(
          'https://prod-51.southeastasia.logic.azure.com:443/workflows/21aef51634694bfb992ec69d9f1da148/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=hAiQE6T-GmhZFghY9oHSRTB-lJo9_gUd4KJYjkuo5ik'
        );
        const fetchedPart = response.data.find(item => item.ID === parseFloat(listingId));
        if (fetchedPart) {
          setPart(fetchedPart);
          fetchRecommendedItems(response.data, fetchedPart.category);
        } else {
          setError('Part not found.');
        }
      } catch (err) {
        console.error('Error fetching part data:', err);
        setError('Failed to fetch part data.');
      } finally {
        setLoading(false);
      }
    };

    const fetchRecommendedItems = (allItems, category) => {
      setRecommendLoading(true);
      try {
        const filteredItems = allItems.filter(item => item.category === category && item.ID !== parseFloat(listingId));
        setRecommended(filteredItems);
        if (filteredItems.length === 0) {
          setRecommendError('No recommendations available.');
        }
      } catch (err) {
        console.error('Error filtering recommended items:', err);
        setRecommendError('Failed to fetch recommended items.');
      } finally {
        setRecommendLoading(false);
      }
    };

    fetchPartData();
  }, [listingId]);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${part.name} to the cart`);
  };

  if (loading) {
    return <div className="loading-message">Loading part details...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!part) {
    return <div className="error-message">Part not found.</div>;
  }

  return (
    <div className="part-detail-page">
      <div className="part-detail">
        <div className="part-detail__images">
          {part.images && part.images.length > 0 ? (
            part.images.map((image, index) => (
              <img key={index} src={image} alt={`Part image ${index + 1}`} />
            ))
          ) : (
            <img src={part.image} alt={`Image of ${part.name}`} />
          )}
        </div>
        <div className="part-detail__info">
          <h1 className="part-detail__name">{part.name}</h1>
          <p className="part-detail__price">${parseFloat(part.price).toFixed(2)}</p>
          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <input
              id="quantity"
              type="number"
              min="1"
              max={part.quantity}
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>

      <div className="part-detail__description-section">
        <div className="part-detail__description">
          <h2>Product Description</h2>
          <p>{part.description}</p>
        </div>
        <div className="part-detail__specifications">
          <h2>Product Specifications</h2>
          <ul>
            <li><strong>Warranty:</strong> 2 years limited warranty</li>
            <li><strong>Part:</strong> A1234B567</li>
            <li><strong>Weight:</strong> 3.2 lbs (1.45 kg)</li>
            <li><strong>Color:</strong> Black</li>
            <li><strong>Material:</strong> High-strength aluminum alloy</li>
            <li><strong>Dimensions:</strong> 15.5x7.8x4.2 inches</li>
          </ul>
        </div>
      </div>

      <section className="recommended-section">
        <h2>Recommended for You</h2>
        {recommendLoading ? (
          <div className="loading-message">Loading recommendations...</div>
        ) : recommendError ? (
          <div className="error-message">{recommendError}</div>
        ) : recommended.length > 0 ? (
          <div className="recommended-items">
            {recommended.map((item) => (
              <div key={item.ID} className="recommended-item">
                <img src={item.image} alt={item.name} className="recommended-item__image" />
                <div className="recommended-item__info">
                  <h3 className="recommended-item__name">{item.name}</h3>
                  <p className="recommended-item__price">${parseFloat(item.price).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No recommendations available.</p>
        )}
      </section>
    </div>
  );
};

export default PartDetail;
