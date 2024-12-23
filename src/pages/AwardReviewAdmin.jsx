import React, {useState, useEffect} from "react";
import axios from "axios";

const AwardReviewAdmin = () => {
  const [reviews, setReviews] = useState([]);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5069/api/competitionawards/all")
      .then((response) => {
        if (response.status === 200) {
          setReviews(response.data.filter(review => review.status === "Pending"));
        } else {
          alert("获取数据失败！");
        }
      })
      .catch(() => {
        alert("服务器错误");
      });
  }, []);

  const filteredReviews = reviews.filter(review =>
    searchId === "" || review.studentId.toString() === searchId
  );

  const handleReview = (index, action) => {
    axios.post(`http://localhost:5069/api/competitionawards/audit/${reviews[index].id}`, {
      status: action,
    })
      .then((response) => {
        if (response.status === 200) {
          alert("审核成功！");
          setReviews(reviews.map((review, i) => {
            if (i === index) {
              return {
                ...review,
                status: action === "approve" ? "justApproved" : "justRejected"
              };
            }
            return review;
          }));
        } else {
          alert("审核失败！");
        }
      })
      .catch(() => {
        alert("服务器错误");
      });
  }

  return (
    <div>
      <div style={{display: "flex"}}>
        <h1 style={{color: "#4CAF50", flex: "0 0 30%"}}>获奖审核管理</h1>
        <input
          type="number"
          placeholder="检索编号"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          style={{marginLeft: "20px", padding: "5px", flex: "0 0 30%"}}
        />
      </div>
      <table>
        <thead>
        <tr>
          <th>学生编号</th>
          <th>学生姓名</th>
          <th>获奖名称</th>
          <th>奖项</th>
          <th>获奖日期</th>
          <th>提交审批日期</th>
          <th>状态</th>
        </tr>
        </thead>
        <tbody>
        {filteredReviews.map((review, index) => (
          <tr key={index}>
            <td>{review.studentId}</td>
            <td>{review.username}</td>
            <td>{review.competitionName}</td>
            <td>{review.awardLevel}</td>
            <td>{new Date(review.awardDate).toLocaleDateString("zh-CN", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            }).replace(/\//g, ".")}</td>
            <td>{new Date(review.createdAt).toLocaleDateString("zh-CN", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            }).replace(/\//g, ".")}</td>
            <td>
              {review.status === "Pending" ? (
                <>
                  <button style={styles.approveButton} onClick={() => handleReview(index, "approve")}>通过</button>
                  <button style={styles.rejectButton} onClick={() => handleReview(index, "reject")}>拒绝</button>
                </>
              ) : (
                <span>{review.status === "justApproved" ? "已通过" : "已拒绝"}</span>
              )}
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