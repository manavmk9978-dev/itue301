import { useState } from "react";

function BookingPage() {
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    timeSlot: ""
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));

    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    setMessage(
      `Appointment requested for ${formData.patientName}`
    );
  }

  return (
    <div className="booking-page">
      <section className="page-header">
        <span>APPOINTMENT BOOKING</span>
        <h1>Book your appointment.</h1>
        <p>
          Fill in the details below to request an appointment
          with a doctor.
        </p>
      </section>

      <div className="booking-layout">
        <div className="booking-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="patientName">
                Patient Name
              </label>

              <input
                id="patientName"
                type="text"
                name="patientName"
                placeholder="Enter patient name"
                value={formData.patientName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="doctorName">
                Doctor Name
              </label>

              <input
                id="doctorName"
                type="text"
                name="doctorName"
                placeholder="Enter doctor name"
                value={formData.doctorName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Appointment Date</label>

              <input
                id="date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="timeSlot">Time Slot</label>

              <select
                id="timeSlot"
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select a time slot
                </option>

                <option value="09:00 AM - 10:00 AM">
                  09:00 AM - 10:00 AM
                </option>

                <option value="10:00 AM - 11:00 AM">
                  10:00 AM - 11:00 AM
                </option>

                <option value="02:00 PM - 03:00 PM">
                  02:00 PM - 03:00 PM
                </option>

                <option value="04:00 PM - 05:00 PM">
                  04:00 PM - 05:00 PM
                </option>
              </select>
            </div>

            <button type="submit" className="submit-button">
              Request Appointment
            </button>
          </form>

          {message && (
            <div className="success-message">
              <strong>Appointment Request</strong>
              <p>{message}</p>
            </div>
          )}
        </div>

        <div className="booking-info">
          <div className="info-icon">+</div>

          <h2>Simple & convenient</h2>

          <p>
            Choose your preferred doctor, date and time slot.
            Your appointment request will be ready in just a
            few steps.
          </p>

          <div className="selected-info">
            <span>Selected Patient</span>
            <strong>
              {formData.patientName || "Not selected"}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;