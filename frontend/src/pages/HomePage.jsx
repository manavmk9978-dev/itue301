import { Link } from "react-router-dom";
import AppointmentCard from "../components/AppointmentCard";

function HomePage() {
  const appointment = {
    patientName: "Manav Makwana",
    doctorName: "Dr. Patel",
    date: "2026-08-25",
    timeSlot: "10:00 AM - 11:00 AM",
    status: "confirmed"
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-label">MEDCARE PLUS</span>

          <h1>
            Your Health,
            <br />
            Our Priority.
          </h1>

          <p>
            Book appointments with trusted doctors quickly
            and conveniently.
          </p>

          <div className="hero-actions">
            <Link to="/doctors" className="primary-button">
              Find a Doctor
            </Link>

            <Link to="/booking" className="secondary-button">
              Book Appointment
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-icon">+</div>
          <h3>Quality Healthcare</h3>
          <p>
            Professional doctors and convenient appointment
            scheduling.
          </p>
        </div>
      </section>

      <section className="features-section">
        <div className="section-heading">
          <span>WHY MEDCARE PLUS</span>
          <h2>Healthcare made simple.</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-number">01</div>
            <h3>Find Doctors</h3>
            <p>
              Browse doctors and check their specialisations
              and availability.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-number">02</div>
            <h3>Book Easily</h3>
            <p>
              Select a convenient date and time slot for your
              appointment.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-number">03</div>
            <h3>Stay Organized</h3>
            <p>
              Keep your appointment information clear and
              accessible.
            </p>
          </div>
        </div>
      </section>

      <section className="appointment-section">
        <div className="section-heading">
          <span>APPOINTMENT</span>
          <h2>Sample appointment</h2>
        </div>

        <AppointmentCard
          patientName={appointment.patientName}
          doctorName={appointment.doctorName}
          date={appointment.date}
          timeSlot={appointment.timeSlot}
          status={appointment.status}
        />
      </section>
    </div>
  );
}

export default HomePage;