import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // 示例登录逻辑：根据用户名区分角色
    if (username === "student" && password === "password") {
      localStorage.setItem("userRole", "student");
      localStorage.setItem("userToken", "fake-student-token"); // 存储用户状态
      navigate("/student"); // 跳转到学生界面
    } else if (username === "admin" && password === "password") {
      localStorage.setItem("userRole", "admin");
      localStorage.setItem("userToken", "fake-admin-token"); // 存储用户状态
      navigate("/admin"); // 跳转到管理员界面
    } else {
      alert("用户名或密码错误！");
    }
  };

  return (
    <div style={styles.container}>
      <h1>登录</h1>
      <input
        type="text"
        placeholder="用户名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin} style={styles.button}>
        登录
      </button>
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
  input: {
    margin: "10px 0",
    padding: "10px",
    fontSize: "16px",
    width: "300px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default LoginPage;
