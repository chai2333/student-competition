import React, {useState, useEffect} from "react";
import axios from "axios";

const AwardRecordAdmin = () => {
  const [records, setRecords] = useState([]);
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5069/api/competitionawards/all")
      .then((response) => {
        if (response.status === 200) {
          setRecords(response.data.filter(record => record.status !== "Pending"));
        } else {
          alert("获取数据失败！");
        }
      })
      .catch(() => {
        alert("服务器错误");
      });
  }, []);

  const filteredRecords = records.filter(record =>
    searchId==="" || record.studentId.toString()===searchId
  );

  return (
    <div>
      <div style={{display: "flex"}}>
        <h1 style={{color: "#4CAF50", flex: "0 0 30%"}}>获奖记录管理</h1>
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
        {filteredRecords.map((record, index) => (
          <tr key={index}>
            <td>{record.studentId}</td>
            <td>{record.username}</td>
            <td>{record.competitionName}</td>
            <td>{record.awardLevel}</td>
            <td>{new Date(record.awardDate).toLocaleDateString("zh-CN", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            }).replace(/\//g, ".")}</td>
            <td>{new Date(record.createdAt).toLocaleDateString("zh-CN", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            }).replace(/\//g, ".")}</td>
            <td>{record.status}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default AwardRecordAdmin;