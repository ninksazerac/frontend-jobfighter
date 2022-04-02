import React from 'react';
import ReactDom from "react-dom";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Button from '@mui/material/Button';
import Login from "./components/page/Login";
import Forgotpass from "./components/page/Forgotpass";
import Signupuser from "./components/page/Signup-user.js";
import Signupcompany from "./components/page/Signup-company.js";


function App(){
  
  return(
    <div className="container">
         <Routes>

          {/* ใส่ path ใหม่ๆให้ลิ้มลอง /}
          {/ อยากเปิดแสดงผลหน้าไหนให้พิมพ์ตรง path ต่อท้ายตรง url /}

          {/ <Route path="/" element={<App />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          <Route path="/signupuser" element={<Signupuser />} />
          <Route path="/signupcompany" element={<Signupcompany />} />
        </Routes>
      
    </div>
  );
}

export default App;