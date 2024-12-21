import React from "react";

const AwardReviewAdmin = () => {
  const reviews = [
    { student: "张三", name: "奖项 A", level: "一等奖", status: "待审核" },
    { student: "李四", name: "奖项 B", level: "二等奖", status: "待审核" },
  ];

  const handleReview = (id, action) => {
    alert(`审核结果: ${action === "approve" ? "通过" : "不通过"}`);
  };

  return (
    <div>
      <h1 style={{ color: "#4CAF50" }}>获奖审核管理</h1>
      <table>
        <thead>
          <tr>
            <th>学生姓名</th>
            <th>获奖名称</th>
            <th>获奖等级</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <tr key={index}>
              <td>{review.student}</td>
              <td>{review.name}</td>
              <td>{review.level}</td>
              <td>{review.status}</td>
              <td>
                <button
                  onClick={() => handleReview(index, "approve")}
                  style={styles.approveButton}
                >
                  通过
                </button>
                <button
                  onClick={() => handleReview(index, "reject")}
                  style={styles.rejectButton}
                >
                  不通过
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  approveButton: {
    marginRight: "10px",
    padding: "5px 10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  rejectButton: {
    padding: "5px 10px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AwardReviewAdmin;
