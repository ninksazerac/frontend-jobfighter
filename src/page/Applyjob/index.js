import React from "react";
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import "./Applyjob.css";


//class => คำสั่งการทำงาน
//className => ชื่อ เผื่อใช้ไว้ดึงข้อมูลหรือใช้แต่ง css
export default function Applyjob(){
  const notosan1=createTheme({
    typography:{
      subtitle1:{
        fontSize:35,
        fontFamily: [
          'Noto Sans Thai',
          'sans-serif',
        ].join(','),
      },
      body1:{
        fontSize:30,
        fontFamily: [
          'Noto Sans Thai',
          'sans-serif',
        ].join(','),
      },
      body2:{
        fontSize:18,
        fontWeight:500,
        fontFamily: [
          'Noto Sans Thai',
          'sans-serif',
        ].join(','),
      }
    },
  });
    return(
        <ThemeProvider theme={notosan1}>
        <div class="h-screen w-200 bg-gray-200  drop-shadow-xl md:drop-shadow-xl rounded-lg mx-10 mt-8">
        <div class="flex space-x-3">
        <svg class="h-20 w-20 text-black ml-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
        <Typography variant="subtitle1">
            บริษัท ไฮ
        </Typography>
        </div>
        <Typography variant="body2" >
        
        </Typography>
        </div>
        </ThemeProvider>
    );
}