import React from "react";
import { useNavigate } from "react-router-dom";

const AdminLanding = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>欢迎进入管理员管理系统</h1>
      <div style={styles.buttons}>
        <button onClick={() => navigate("/admin/records")} style={styles.button}>
          获奖记录管理
        </button>
        <button onClick={() => navigate("/admin/reviews")} style={styles.button}>
          获奖审核管理
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f9f8",
  },
  heading: {
    color: "#4CAF50",
    fontSize: "24px",
    marginBottom: "20px",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AdminLanding;
