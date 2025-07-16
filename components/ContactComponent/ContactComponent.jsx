'use client'
import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/add', formData);
      if (response.status === 201) {
        setSubmissionStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Submission error:', error);
    }
  };

  return (
    <div>
        <div id="extra">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />  
        </div>
    <div className="form-container">
        
      <div className="form-card">
        <h2 className="form-title">Contact Us</h2>
        
        {submissionStatus === 'success' && (
          <div className="success-message">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        
        {submissionStatus === 'error' && (
          <div className="error-message">
            There was an error submitting your form. Please try again.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">YOUR NAME*</label>
            <div className="name-fields">
              <input
                type="text"
                
                name="firstName"
                placeholder="First name"
                className="form-input"
                value={formData.firstName}
                onChange={handleChange}
                required
              /> 
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="form-input"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">EMAIL ADDRESS*</label>
            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">PHONE NUMBER*</label>
            <input
              type="tel"
              name="phone"
              placeholder='Enter your phone number'
              className="form-input"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">YOUR QUERY*</label>
            <textarea
              name="message"
              className="form-textarea"
              placeholder='Enter your query here'
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;