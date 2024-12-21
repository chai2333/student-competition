import React from "react";
import { useNavigate } from "react-router-dom";

const StudentLanding = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>欢迎进入学生管理系统</h1>
      <div style={styles.buttons}>
        <button onClick={() => navigate("/student/awards")} style={styles.button}>
          我的获奖记录
        </button>
        <button onClick={() => navigate("/student/add-award")} style={styles.button}>
          添加获奖记录
        </button>
        <button onClick={() => navigate("/student/profile")} style={styles.button}>
          个人信息
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

export default StudentLanding;
