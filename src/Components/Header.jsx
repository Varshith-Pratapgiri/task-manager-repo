import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="header">
        <div className="header-inner">
            <nav style={{width: "100%"}}>
      <ul>
        <li className="left">
          <Link to="/">Home</Link>
        </li>
            <li className="right">
          <button className="profile-button" onClick={() =>
          navigate("/profile", {
            state: { backgroundLocation: location }
          })}>Profile</button>
        </li>
      </ul>
    </nav>
        </div>
    </header>
  );
}