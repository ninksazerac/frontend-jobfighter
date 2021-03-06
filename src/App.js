import React from "react";
import ReactDom from "react-dom";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Forgotpass from "./page/Forgotpass";
import Signupstudent from "./page/Signup-student";
import Signupcompany from "./page/Signup-company";
import Layout from "./page/Layout";
import Notistudent from "./page/Noti-student";
import Applyjob from "./page/Applyjob";
import Postjob from "./page/Postjob";
import Paymentcompany from "./page/Payment-company";
import Contactstudent from "./page/Contact-student";
import Contactcompany from "./page/Contact-company";
import Editpost from "./page/Editpost";

function App() {
  return (
    <div>
      <Routes>
        {/* ใส่ path ใหม่ๆให้ลิ้มลอง /}
          {/ อยากเปิดแสดงผลหน้าไหนให้พิมพ์ตรง path ต่อท้ายตรง url /}

          {/ <Route path="/" element={<App />} /> */}
        <Route element={<Layout></Layout>}>
        <Route path="/applyjob" element={<Applyjob />} />
        <Route path="/postjob" element={<Postjob />} />
        <Route path="/paymentcompany" element={<Paymentcompany />} />
        <Route path="/contactstudent" element={<Contactstudent />} />
        <Route path="/contactcompany" element={<Contactcompany />} />
        <Route path="/editpost" element={<Editpost />} />
          </Route>

          <Route path="/" element={<Login />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          <Route path="/Signupstudent" element={<Signupstudent />} />
          <Route path="/signupcompany" element={<Signupcompany />} />
          <Route path="/notistudent" element={<Notistudent />} />
          {/* <Route path="/applyjob" element={<pplyjob />} /> */}
          {/* <Route path="/paymentcompany" element={<Paymentcompany />} /> */}
          {/* <Route path="/postjob" element={<Postjob />} /> */}
          {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
