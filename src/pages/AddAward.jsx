import React from "react";

const AddAward = () => {
  return (
    <div>
      <h1 style={{ color: "#4CAF50" }}>添加获奖记录</h1>
      <form>
        <label>获奖名称</label>
        <input type="text" placeholder="请输入获奖名称" />
        <label>获奖时间</label>
        <input type="date" />
        <label>获奖等级</label>
        <select>
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
