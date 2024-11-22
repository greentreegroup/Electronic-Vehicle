import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';
import { shipping_methods } from './data';
//import '../SignUpForm.css'; //This form is built off of the sign up form for now

const CheckoutForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        username: '',
        Email_addres: '',
        phone_number: '',
        country: '',
        state: '',
        city: '',
        address: '',
        shipping_method: ''
    });

    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [shippingMethodCost, setShippingMethodCost] = useState(0);

    useEffect(() => {
        // Load all countries on component mount
        setCountries(Country.getAllCountries());
    }, []);

    useEffect(() => {
        // Load states when country changes
        if (formData.country) {
            setStates(State.getStatesOfCountry(formData.country));
            setFormData(prev => ({ ...prev, state: '', city: '' }));
        }
    }, [formData.country]);

    useEffect(() => {
        // Load cities when state changes
        if (formData.state && formData.country) {
            setCities(City.getCitiesOfState(formData.country, formData.state));
            setFormData(prev => ({ ...prev, city: '' }));
        }
    }, [formData.state, formData.country]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        console.log(e);
    };

    const handleShippingMethodChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(value);
        getShippingMethodCost(value);
    }

    const getShippingMethodCost = (shippingMethod) => {
        if(shippingMethod === "Standard"){
          const cost = 0;
          setShippingMethodCost(cost);
        } else if (shippingMethod === "Expidited") {
          const cost = 3570;
          setShippingMethodCost(cost);
        } else if (shippingMethod === "Overnight"){
          const cost = 7140;
          setShippingMethodCost(cost);
        }
      }

    return (
        <div className="signup-form-container">
            <div className="signup-form">
                <h2>Check Out</h2>
                <button className="close-btn" onClick={onClose}>
                    ✖
                </button>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Name:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Name"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Email_addres">Email:</label>
                        <input
                            type="email"
                            id="Email_addres"
                            name="Email_addres"
                            placeholder="Email"
                            value={formData.Email_addres}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone_number">Phone Number:</label>
                        <input
                            type="text"
                            id="phone_number"
                            name="phone_number"
                            placeholder="Phone Number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="country">Country:</label>
                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Country</option>
                            {countries.map((country) => (
                                <option key={country.isoCode} value={country.isoCode}>
                                    {country.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="state">State/Province:</label>
                        <select
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                            disabled={!formData.country}
                        >
                            <option value="">Select State</option>
                            {states.map((state) => (
                                <option key={state.isoCode} value={state.isoCode}>
                                    {state.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">City:</label>
                        <select
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            disabled={!formData.state}
                        >
                            <option value="">Select City</option>
                            {cities.map((city) => (
                                <option key={city.name} value={city.name}>
                                    {city.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Address"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="shipping_method">Shipping Method:</label>
                        <select
                            id="shipping_method"
                            name="shipping_method"
                            value={formData.shipping_method}
                            onChange={handleShippingMethodChange}
                            required
                        >
                            {shipping_methods.map((method) => (
                                <option key={method} value={method}>
                                    {method}
                                </option>
                            ))}
                        </select>
                    </div>

                    <h6>Additional shipping methdod cost: ${shippingMethodCost}</h6>
                      
                    {error && <div className="error-message">{error}</div>}

                    <button type="submit" disabled className="submit-bton">
                        Confirm Order
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;