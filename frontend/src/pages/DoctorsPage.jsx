import { useEffect, useState } from "react";

function DoctorsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchDoctors() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:5001/api/v1/doctors"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDoctors();
  }, []);

  if (loading) {
    return (
      <div className="state-container">
        <div className="loading-spinner"></div>
        <h2>Loading doctors...</h2>
        <p>Please wait while we fetch the doctors.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="state-container error-state">
        <h2>Unable to load doctors</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="doctors-page">
      <section className="page-header">
        <span>OUR MEDICAL TEAM</span>
        <h1>Meet our doctors.</h1>
        <p>
          Browse our doctors and find the right specialist
          for your healthcare needs.
        </p>
      </section>

      <section className="doctor-grid">
        {data.map((doctor) => (
          <div className="doctor-card" key={doctor.id}>
            <div className="doctor-avatar">
              {doctor.name
                .replace("Dr. ", "")
                .charAt(0)}
            </div>

            <div className="doctor-info">
              <div className="doctor-top">
                <span
                  className={
                    doctor.available
                      ? "availability available"
                      : "availability unavailable"
                  }
                >
                  {doctor.available
                    ? "Available"
                    : "Unavailable"}
                </span>
              </div>

              <h2>{doctor.name}</h2>

              <p className="specialisation">
                {doctor.specialisation}
              </p>

              <p className="doctor-email">
                {doctor.email}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default DoctorsPage;