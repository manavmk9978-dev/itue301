import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">MedCare Plus</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/booking">Book Appointment</Link>
      </div>
    </nav>
  );
}

export default Navbar;