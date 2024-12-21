import React from "react";

const AwardRecordAdmin = () => {
  const records = [
    { student: "张三", name: "奖项 A", level: "一等奖" },
    { student: "李四", name: "奖项 B", level: "二等奖" },
  ];

  return (
    <div>
      <h1 style={{ color: "#4CAF50" }}>获奖记录管理</h1>
      <table>
        <thead>
          <tr>
            <th>学生姓名</th>
            <th>获奖名称</th>
            <th>获奖等级</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.student}</td>
              <td>{record.name}</td>
              <td>{record.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AwardRecordAdmin;
