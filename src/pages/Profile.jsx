import React from "react";

const Profile = () => {
  const user = {
    name: "张三",
    id: "20230001",
    email: "zhangsan@example.com",
  };

  return (
    <div>
      <h1 style={{ color: "#4CAF50" }}>个人信息</h1>
      <div style={styles.container}>
        <div style={styles.avatar}></div>
        <div style={styles.info}>
          <p><strong>姓名:</strong> {user.name}</p>
          <p><strong>学号:</strong> {user.id}</p>
          <p><strong>邮箱:</strong> {user.email}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#ddd",
    marginRight: "20px",
  },
  info: {
    fontSize: "16px",
  },
};

export default Profile;
