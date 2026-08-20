const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Patient = require("./models/Patient");
const Doctor = require("./models/Doctor");
const Appointment = require("./models/Appointment");

dotenv.config({ path: "../.env" });

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

function requestLogger(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`[${req.method}] ${req.path} [${timestamp}]`);
  next();
}

app.use(requestLogger);

const doctors = [
  {
    id: 1,
    name: "Dr. Patel",
    email: "patel@medcare.com",
    specialisation: "Cardiologist",
    available: true
  },
  {
    id: 2,
    name: "Dr. Shah",
    email: "shah@medcare.com",
    specialisation: "Neurologist",
    available: true
  },
  {
    id: 3,
    name: "Dr. Mehta",
    email: "mehta@medcare.com",
    specialisation: "Dermatologist",
    available: false
  }
];

const appointments = [];

app.get("/api/v1/appointments", (req, res) => {
  res.status(200).json(appointments);
});

app.post("/api/v1/appointments", (req, res) => {
  const appointment = {
    id: appointments.length + 1,
    ...req.body
  };

  appointments.push(appointment);

  res.status(201).json(appointment);
});

app.get("/api/v1/doctors", (req, res) => {
  res.status(200).json(doctors);
});

app.get("/api/v1/mongodb/test", async (req, res, next) => {
  try {
    const patient = await Patient.create({
      name: "Test Patient",
      email: `test${Date.now()}@medcare.com`,
      phone: "9999999999",
      bloodGroup: "O+",
      age: 25
    });

    const doctor = await Doctor.create({
      name: "Dr. MongoDB",
      email: "mongodb@medcare.com",
      specialisation: "General Physician",
      available: true
    });

    const appointment = await Appointment.create({
      patientId: patient._id,
      doctorId: doctor._id,
      date: new Date("2026-08-25"),
      timeSlot: "10:00 AM - 11:00 AM",
      reason: "Regular consultation"
    });

    res.status(201).json({
      success: true,
      message: "Patient, Doctor and Appointment schemas are working",
      patient,
      doctor,
      appointment
    });
  } catch (error) {
    next(error);
  }
});

app.get("/api/v1/mongodb/validation-test", async (req, res, next) => {
  try {
    const patient = new Patient({
      name: "Invalid Patient",
      email: `invalid${Date.now()}@medcare.com`,
      bloodGroup: "INVALID"
    });

    await patient.validate();

    res.status(200).json({
      success: true,
      message: "Validation passed"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Validation failed",
      error: error.message
    });
  }
});

app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({
    success: false,
    message: "Internal server error"
  });
});

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
}

startServer();