'use client';
import React, { useState } from 'react';
import './ContactForm.css';

const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSdCKzOktjRxLF9EMbbdaMI8ffQyNXIKSPJlydgDcSk4DmwMbA/formResponse";

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

    const formPayload = new FormData();
    formPayload.append("entry.123456789", formData.firstName); // Replace with real entry ID
    formPayload.append("entry.987654321", formData.lastName);  // Replace with real entry ID
    formPayload.append("entry.111222333", formData.email);     // Replace with real entry ID
    formPayload.append("entry.444555666", formData.phone);     // Replace with real entry ID
    formPayload.append("entry.777888999", formData.message);   // Replace with real entry ID

    try {
      const response = await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formPayload,
      });

      // Google doesn't return a real response when mode is 'no-cors', so we just assume success
      setSubmissionStatus("success");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      setSubmissionStatus("error");
      console.error("Submission error:", error);
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
