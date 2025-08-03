const express = require('express');
const {
  bookAppointment,
  getUserAppointments,
  getAllAppointments,
} = require('../controllers/appointmentController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, bookAppointment);
router.get('/', authMiddleware, getUserAppointments);
router.get('/all', authMiddleware, getAllAppointments); // Admin only

module.exports = router;
