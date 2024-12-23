import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post("http://localhost:5069/api/auth/login", {
      username: username,
      password: password,
    })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("userid", response.data.id);
          if (response.data.id < 50) {
            alert("登录成功！管理员" + response.data.username);
            navigate("/admin");
          } else {
            alert("登录成功！学生" + response.data.username);
            navigate("/student");
          }
        } else {
          alert("登录失败！");
        }
      })
      .catch(() => {
        alert("服务器错误");
      });
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
      <a onClick={() => navigate("/register")} style={styles.linkButton}>
        注册
      </a>
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
    marginTop: "10px",
    cursor: "pointer",
  },
};

export default LoginPage;
