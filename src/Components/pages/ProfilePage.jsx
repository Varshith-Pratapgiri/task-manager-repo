import "../../styles.css";
import { useNavigate, Link, Outlet } from "react-router-dom";

export default function ProfilePage() {
    const navigate = useNavigate();

  return (
    <div className="back-drop" onClick={() => navigate(-1)}>
      <aside
        className="side-bar"
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Profile</h1>
        <ul>
            <li>
                <Link to="/tasks">Tasks</Link>
            </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}