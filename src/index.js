import { render } from "react-dom";
import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/page/Login";
import './index.css'

ReactDOM.render(
  <BrowserRouter>
        <Routes>
          {/* ใส่ path ใหม่ๆให้ลิ้มลอง */}
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/" element={<Login />} />
        </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);