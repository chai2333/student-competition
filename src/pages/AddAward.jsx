import React, {useState} from "react";
import axios from "axios";

const AddAward = () => {
  const [competitionName, setCompetitionName] = useState("");
  const [awardDate, setAwardDate] = useState(null);
  const [awardLevel, setAwardLevel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5069/api/competitionawards", {
      studentId: localStorage.getItem("userid"),
      competitionName: competitionName,
      awardDate: awardDate,
      awardLevel: awardLevel,
    })
      .then((response) => {
        if (response.data.code !== 200) {
          alert("申请成功，请等待审核！");
          setCompetitionName("");
          setAwardDate(null);
          setAwardLevel("");
        } else {
          alert("申请失败！");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("服务器错误");
      });
  }

  return (
    <div>
      <h1 style={{color: "#4CAF50"}}>添加获奖记录</h1>
      <form onSubmit={handleSubmit}>
        <label>获奖名称</label>
        <input type="text" placeholder="请输入获奖名称" value={competitionName}
               onChange={(e) => setCompetitionName(e.target.value)}/>
        <label>获奖时间</label>
        <input type="date" value={awardDate} onChange={(e) => setAwardDate(e.target.value)}/>
        <label>获奖等级</label>
        <select value={awardLevel} onChange={(e) => setAwardLevel(e.target.value)}>
          <option value="一等奖">一等奖</option>
          <option value="二等奖">二等奖</option>
          <option value="三等奖">三等奖</option>
        </select>
        <button type="submit">提交</button>
      </form>
    </div>
  );
};

export default AddAward;