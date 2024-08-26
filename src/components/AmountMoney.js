import React, { useState, useEffect } from 'react'; 
import PropTypes from 'prop-types';
import './AmountMoney.css';
import AddressForm from './AddressForm';

const AmountMoney = ({ idEstate, onClose }) => {
  const [formData, setFormData] = useState({
    amount: '',
  });
  const [minInvestment, setMinInvestment] = useState(0);
  const [tieredPricing, setTieredPricing] = useState([]);
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchMinInvestmentAndTieredPricing = async () => {
      const estateIdAsString = String(idEstate);
      const minInvestmentUrl = `https://prod-56.southeastasia.logic.azure.com/workflows/3a0300d386dc41d586334925a3d8e360/triggers/manual/paths/invoke/property_id/${estateIdAsString}?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=tz8YjfQAQw-B3JdDjpudh-6M7bjtLU6HhDOZ2uqx2lI`;
      const tieredPricingUrl = `https://prod-23.southeastasia.logic.azure.com/workflows/13b8fa754dd0474a9dd0bd7b4ee743b6/triggers/manual/paths/invoke/property_id/${estateIdAsString}?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Jf3TKSfKKgDURvrBiKP4v3iIC2Gt6YTyBeGZH8ad8j0`;

      try {
        const responses = await Promise.all([
          fetch(minInvestmentUrl),
          fetch(tieredPricingUrl),
        ]);

        const minInvestData = await responses[0].json();
        const tieredPricingData = await responses[1].json();

        console.log(`HTTP Status for Min Investment: ${responses[0].status}`);
        console.log(`HTTP Status for Tiered Pricing: ${responses[1].status}`);

        if (responses[0].ok) {
          setMinInvestment(parseInt(minInvestData, 10));
        } else {
          throw new Error('Failed to fetch minimum investment');
        }

        if (responses[1].ok) {
          setTieredPricing(tieredPricingData.body);
        } else {
          throw new Error('Failed to fetch tiered pricing');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      }
    };

    fetchMinInvestmentAndTieredPricing();
  }, [idEstate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(null);
  };

  const handleSetAmount = (amount) => {
    setFormData({ ...formData, amount: `${amount}` });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (parseInt(formData.amount, 10) < minInvestment) {
      setError(`Amount must be at least ${minInvestment}`);
      return;
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <AddressForm onClose={onClose} />;
  }

  return (
    <div className="amount-money-container">
      <div className="amount-form">
        <h2>Amount of Money</h2>
        <button className="close-btn" onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder={`Enter amount (Min: ${minInvestment})`}
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>
          <div className="quick-fill-group">
            {[10000, 20000, 50000, 100000].map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => handleSetAmount(amount)}
                className={`quick-fill-btn ${amount < minInvestment ? 'disabled' : ''}`}
                disabled={amount < minInvestment}
              >
                ${amount.toLocaleString()}
              </button>
            ))}
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
      <div className="tiered-pricing">
        <h2>Tiered Pricing</h2>
        {tieredPricing.length > 0 ? (
  tieredPricing.map((tier, index) => (
    <div key={index} className="tier-row">
      <div className="tier-column">Strategy: {tier.investment_strategy}</div>
      <div className="tier-column">Rate: {(tier.investment_rate * 100).toFixed(2)}%</div>
      <div className="tier-column">Target Close Date: {tier.target_close_date}</div>
      <div className="tier-column">Target Hold Period: {tier.target_hold_peroid}</div>
      <div className="tier-column">Target Net ITT: {(tier.target_net_itt * 100).toFixed(2)}%</div>
      <div className="tier-column">Target Equity Multiple: {tier.target_equlity_multiple}</div>
    </div>
  ))
) : (
  <p>No tiered pricing information available.</p>
)}

      </div>
    </div>
  );
};

AmountMoney.propTypes = {
  idEstate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AmountMoney;
