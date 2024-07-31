import { NavLink } from "react-router-dom";
import "./NavigationMenu.css";
import avatar from "../assets/avatar.webp";
import settingsIcon from "../assets/icons/settings.svg";

const NavigationMenu = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="profile-image-wrapper">
          <img src={avatar} alt="Profile" className="profile-image" />
          <button className="profile-settings-button">
            <svg className="settings-icon">
              <use href={`${settingsIcon}#settings`} />
            </svg>
          </button>
        </div>
        <h2 className="profile-name">User Name</h2>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <NavLink
              to="/orders"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;
