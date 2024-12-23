import React, { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "username",
    id: "1",
    email: "3498572893547982",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);
  const [password, setPassword] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    setUser(editedUser);
    // Send PUT request to backend
    fetch(`http://localhost:5069/api/Auth/Update/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Username: editedUser.name,
        Email: editedUser.email,
        Password: password,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Profile updated:", data);

        if (data === "用户信息更新成功") {
          alert("用户信息更新成功");
        } else {
          alert("更新失败");
        }
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        alert("更新失败");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1 style={{ color: "#4CAF50" }}>个人信息</h1>
      <div style={styles.container}>
        <div style={styles.avatar}></div>
        <div style={styles.info}>
          {isEditing ? (
            <>
              <p>
                <strong>姓名:</strong>
                <input
                  type="text"
                  name="name"
                  value={editedUser.name}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>学号:</strong>
                <input
                  type="text"
                  name="id"
                  value={editedUser.id}
                  readOnly
                />
              </p>
              <p>
                <strong>邮箱:</strong>
                <input
                  type="text"
                  name="email"
                  value={editedUser.email}
                  onChange={handleChange}
                />
              </p>
              <p>
                <strong>密码:</strong>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </p>
              <button onClick={handleSaveClick}>保存</button>
            </>
          ) : (
            <>
              <p><strong>姓名:</strong> {user.name}</p>
              <p><strong>学号:</strong> {user.id}</p>
              <p><strong>邮箱:</strong> {user.email}</p>
              <button onClick={handleEditClick}>编辑</button>
            </>
          )}
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
