import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Here you would typically send the email to your backend
    console.log('Subscribing email:', email);
    
    // Reset form and show success message
    setIsSubscribed(true);
    setError('');
    setEmail('');
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Stay Updated with Codeknight</h2>
          <p className="newsletter-subtitle">
            Get the latest esports news, tournament updates, and exclusive insights delivered straight to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="newsletter-form">
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe Now
              </button>
            </div>
            
            {error && <p className="error-message">{error}</p>}
            {isSubscribed && (
              <p className="success-message">
                ✓ Thank you for subscribing! You'll receive our latest updates soon.
              </p>
            )}
          </form>
          
          <p className="newsletter-disclaimer">
            We respect your privacy. Unsubscribe at any time. No spam, just pure gaming excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
