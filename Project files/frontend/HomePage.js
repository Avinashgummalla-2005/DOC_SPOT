import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import BookingForm from '../components/BookingForm';
import AdminPanel from '../components/AdminPanel';
import DoctorDashboard from '../components/DoctorDashboard';
import UserDashboard from '../components/UserDashboard';

const HomePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) setUser(JSON.parse(userStr));
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  if (!user) return null;

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>DocSpot</Navbar.Brand>
          <Nav className="ms-auto">
            <Navbar.Text className="me-3">Signed in as: {user.name}</Navbar.Text>
            <Button variant="outline-light" onClick={logout}>
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        {user.role === 'admin' && <AdminPanel />}
        {user.role === 'doctor' && <DoctorDashboard user={user} />}
        {user.role === 'user' && (
          <>
            <BookingForm user={user} />
            <UserDashboard user={user} />
          </>
        )}
      </Container>
    </>
  );
};

export default HomePage;
