import { render } from "react-dom";
import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css'
import Login from "./components/page/Login";
import Forgotpass from "./components/page/Forgotpass";
import Signupuser from "./components/page/Signup-user";

ReactDOM.render(
  <BrowserRouter>
        <Routes>
          
          {/* ใส่ path ใหม่ๆให้ลิ้มลอง */}
          {/* อยากเปิดแสดงผลหน้าไหนให้พิมพ์ตรง path ต่อท้ายตรง url */}

          {/* <Route path="/" element={<App />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          <Route path="/signupuser" element={<Signupuser />} />
        </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);