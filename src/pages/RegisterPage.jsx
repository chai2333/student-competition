import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("密码和确认密码不匹配！");
      return;
    }

    axios.post("http://localhost:5069/api/Auth/register", {
      username: username,
      password: password,
      email: email,
    }).then((response) => {
      if (response.status === 200) {
        alert("注册成功！");
        navigate("/login"); // 跳转到登录界面
      } else {
        alert("注册失败！");
      }
    }).catch(() => {
      alert("服务器错误");
    });
  };

  return (
    <div style={styles.container}>
      <h1>注册</h1>
      <input
        type="text"
        placeholder="用户名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <input
        type="email"
        placeholder="邮箱"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="确认密码"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleRegister} style={styles.button}>
        注册
      </button>
      <a onClick={() => navigate("/login")} style={styles.linkButton}>已有账号，登录</a>
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
  linkButton: {
    color: "#4CAF50",
    textDecoration: "none",
    marginTop: "20px",
    cursor: "pointer",
  },
};

export default RegisterPage;