import React from "react";

const AwardList = () => {
  const records = [
    { name: "奖项 A", date: "2023/10/01", level: "一等奖" },
    { name: "奖项 B", date: "2023/09/15", level: "二等奖" },
    { name: "奖项 C", date: "2023/08/20", level: "三等奖" },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>我的获奖记录</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>获奖名称</th>
            <th>获奖时间</th>
            <th>获奖等级</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.name}</td>
              <td>{record.date}</td>
              <td>{record.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  heading: {
    color: "#4CAF50",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    backgroundColor: "#e8f5e9",
    textAlign: "left",
    padding: "10px",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
  },
};

export default AwardList;
