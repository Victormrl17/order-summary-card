import React from 'react';
import './OrderSummaryCard.css';

const OrderSummaryCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={`${process.env.PUBLIC_URL}/images/illustration-hero.svg`} alt="Illustration" />
      </div>
      <div className="card-body">
        <h2>Order Summary</h2>
        <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

        {/* Sección del Plan */}
        <div className="plan-details">
          <div className="plan">
            <img src={`${process.env.PUBLIC_URL}/images/icon-music.svg`} alt="Music Icon" className="music-icon"/>
            <div className="plan-info">
              <h3>Annual Plan</h3>
              <p>$59.99/year</p>
            </div>
          </div>
          <a href="#" className="change-link">Change</a>
        </div>

        {/* Botones */}
        <button className="payment-btn">Proceed to Payment</button>
        <button className="cancel-btn">Cancel Order</button>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
