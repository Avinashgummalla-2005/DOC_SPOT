import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const doctors = [
  {
    id: 1,
    name: 'Dr. Anjali Sharma',
    category: 'Cardiologist',
    fee: 3000,
    timings: '10:00 AM - 4:00 PM',
  },
  {
    id: 2,
    name: 'Dr. Ravi Kumar',
    category: 'Dermatologist',
    fee: 3000,
    timings: '11:00 AM - 5:00 PM',
  },
  {
    id: 3,
    name: 'Dr. Suresh Babu',
    category: 'Orthopedic',
    fee: 3000,
    timings: '9:00 AM - 3:00 PM',
  },
  {
    id: 4,
    name: 'Dr. Meena Reddy',
    category: 'Pediatrician',
    fee: 3000,
    timings: '12:00 PM - 6:00 PM',
  },
  {
    id: 5,
    name: 'Dr. Arjun Singh',
    category: 'Neurologist',
    fee: 3000,
    timings: '10:00 AM - 4:00 PM',
  },
  {
    id: 6,
    name: 'Dr. Latha Devi',
    category: 'Gynecologist',
    fee: 3000,
    timings: '11:00 AM - 5:00 PM',
  },
  {
    id: 7,
    name: 'Dr. Manoj Das',
    category: 'General Physician',
    fee: 3000,
    timings: '9:00 AM - 3:00 PM',
  },
];

const Home = () => {
  const navigate = useNavigate();

  const handleBooking = (doctor) => {
    // Here you can save booking info or send to backend later
    // For now, just redirect to confirmation page
    navigate('/confirmation', { state: { doctor } });
  };

  return (
    <div className="home-container">
      <h1>Available Doctors</h1>
      <div className="doctors-grid">
        {doctors.map((doc) => (
          <div key={doc.id} className="doctor-card">
            <h3>{doc.name}</h3>
            <p><strong>Category:</strong> {doc.category}</p>
            <p><strong>Fees:</strong> ₹{doc.fee}</p>
            <p><strong>Timings:</strong> {doc.timings}</p>
            <button
              className="book-btn"
              onClick={() => handleBooking(doc)}
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
