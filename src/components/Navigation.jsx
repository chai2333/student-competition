import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ routes }) => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.logo}>LOGO</div>
      <ul style={styles.navList}>
        {routes.map((route) => (
          <li key={route.path} style={styles.navItem}>
            <NavLink
              to={route.path}
              style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "200px",
    height: "100vh",
    backgroundColor: "#e8f5e9", // 浅绿色背景
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px",
    boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)",
    position: "fixed", // 固定在左侧
    top: 0,
    left: 0,
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "30px",
    color: "#4CAF50",
    textAlign: "center",
    width: "100%",
  },
  navList: {
    listStyleType: "none",
    padding: 0,
    width: "100%",
  },
  navItem: {
    width: "100%", // 确保每个导航项宽度一致
    textAlign: "center",
  },
  link: {
    display: "block",
    padding: "15px 0",
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
    width: "100%",
    boxSizing: "border-box",
  },
  activeLink: {
    backgroundColor: "#c8e6c9", // 深绿色背景
    color: "#4CAF50",
    fontWeight: "bold",
  },
};

export default Navigation;
