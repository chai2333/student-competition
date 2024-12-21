import React from "react";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";

const DashboardLayout = ({ routes, children }) => {
  const navigate = useNavigate();

const handleLogout = () => {
  // 清除所有与用户相关的状态
  localStorage.removeItem("userToken"); // 假设你存储了 token
  localStorage.removeItem("userRole"); // 假设你存储了角色
  navigate("/"); // 跳转到登录页面
};


  return (
    <div style={styles.container}>
      <Navigation routes={routes} />
      <div style={styles.content}>
        <div style={styles.header}>
          <button style={styles.logoutButton} onClick={handleLogout}>
            退出登录
          </button>
        </div>
        <div style={styles.pageContent}>{children}</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    width: "100vw",
  },
  content: {
    flex: 1,
    marginLeft: "200px", // 为导航栏留出宽度
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f5f9f8",
  },
  header: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#e8f5e9", // 浅绿色背景
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  logoutButton: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 15px",
    fontSize: "14px",
    cursor: "pointer",
  },
  pageContent: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
  },
};

export default DashboardLayout;
