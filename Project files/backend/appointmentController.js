const Appointment = require('../models/Appointment');
const User = require('../models/User');

const bookAppointment = async (req, res) => {
  try {
    const { doctorId, appointmentDate, comments } = req.body;

    if (!doctorId || !appointmentDate) {
      return res.status(400).json({ message: 'Please provide doctor and date' });
    }

    const doctor = await User.findById(doctorId);
    if (!doctor || doctor.role !== 'doctor') {
      return res.status(400).json({ message: 'Invalid doctor selected' });
    }

    const newAppointment = new Appointment({
      user: req.user.id,
      doctor: doctorId,
      appointmentDate,
      comments,
    });

    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getUserAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ user: req.user.id })
      .populate('doctor', 'name email')
      .sort({ appointmentDate: 1 });
    res.json(appointments);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllAppointments = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied' });
  }
  try {
    const appointments = await Appointment.find()
      .populate('user', 'name email')
      .populate('doctor', 'name email')
      .sort({ appointmentDate: 1 });
    res.json(appointments);
  } catch {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { bookAppointment, getUserAppointments, getAllAppointments };
