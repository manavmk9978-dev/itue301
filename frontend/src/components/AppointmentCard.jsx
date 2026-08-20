function AppointmentCard({
  patientName,
  doctorName,
  date,
  timeSlot,
  status
}) {
  return (
    <div className={`appointment-card ${status}`}>
      <div className="appointment-header">
        <h3>Appointment Details</h3>
        <span className={`status-badge ${status}`}>
          {status}
        </span>
      </div>

      <div className="appointment-details">
        <p>
          <strong>Patient</strong>
          <span>{patientName}</span>
        </p>

        <p>
          <strong>Doctor</strong>
          <span>{doctorName}</span>
        </p>

        <p>
          <strong>Date</strong>
          <span>{date}</span>
        </p>

        <p>
          <strong>Time Slot</strong>
          <span>{timeSlot}</span>
        </p>
      </div>
    </div>
  );
}

export default AppointmentCard;