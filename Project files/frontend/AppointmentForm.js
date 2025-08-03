import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    mobile: '',
    date: '',
    doctor: '',
    comments: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data Submitted:", formData);
    navigate('/confirmation');
  };

  return (
    <div className="appointment-form-container">
      <h2>Book Your Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
        <select name="gender" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input type="tel" name="mobile" placeholder="Mobile Number" onChange={handleChange} required />
        <input type="date" name="date" onChange={handleChange} required />
        <select name="doctor" onChange={handleChange} required>
          <option value="">Select Doctor</option>
          <option>Dr. Ramesh - Cardiologist</option>
          <option>Dr. Priya - Dermatologist</option>
          <option>Dr. Arun - Orthopedic</option>
          <option>Dr. Sneha - Pediatrician</option>
        </select>
        <textarea name="comments" placeholder="Additional Comments" onChange={handleChange}></textarea>
        <button type="submit" className="confirm-button">Confirm Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
