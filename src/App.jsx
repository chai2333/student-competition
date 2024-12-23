import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import LoginPage from "./pages/LoginPage";
import AwardList from "./pages/AwardList";
import AddAward from "./pages/AddAward";
import Profile from "./pages/Profile";
import AwardRecordAdmin from "./pages/AwardRecordAdmin";
import AwardReviewAdmin from "./pages/AwardReviewAdmin";
import RegisterPage from "./pages/RegisterPage.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 登录页面 */}
        <Route path="/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>

        {/* 学生界面 */}
        <Route
          path="/student/*"
          element={
            <DashboardLayout
              routes={[
                {path: "/student/awards", name: "我的获奖记录"},
                {path: "/student/add-award", name: "添加获奖记录"},
                {path: "/student/profile", name: "个人信息"},
              ]}
            >
              <Routes>
                <Route path="awards" element={<AwardList/>}/>
                <Route path="add-award" element={<AddAward/>}/>
                <Route path="profile" element={<Profile/>}/>
              </Routes>
            </DashboardLayout>
          }
        />

        {/* 管理员界面 */}
        <Route
          path="/admin/*"
          element={
            <DashboardLayout
              routes={[
                {path: "/admin/records", name: "获奖记录管理"},
                {path: "/admin/reviews", name: "获奖审核管理"},
              ]}
            >
              <Routes>
                <Route path="records" element={<AwardRecordAdmin/>}/>
                <Route path="reviews" element={<AwardReviewAdmin/>}/>
              </Routes>
            </DashboardLayout>
          }
        />

        {/* 默认重定向 */}
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </Router>
  );
};

export default App;
