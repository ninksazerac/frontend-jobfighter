import React from "react";
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import "./Postjob.css";
import { TextField } from "@material-ui/core";



//class => คำสั่งการทำงาน
//className => ชื่อ เผื่อใช้ไว้ดึงข้อมูลหรือใช้แต่ง css
export default function Postjob(){
    const notosan1=createTheme({
        typography:{
          subtitle1:{
            fontSize:35,
            fontWeight:'bold',
            fontFamily: [
              'Noto Sans Thai',
              'sans-serif',
            ].join(','),
          },
          body1:{
            fontSize:25,
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
        <div class=" h-20 w-200  bg-green-300 rounded-t-lg">

            {/* หัวข้อ */}
            <div class="pl-8 pt-2.5 ">
            <Typography variant="subtitle1">
                สร้างโพสต์หาพนักงาน
            </Typography>
            </div>

            {/* รายละเอียดงาน */}
            <div class="pl-7 pt-3">
            <Typography variant="body1">
                รายละเอียดงาน
            </Typography>
            
            {/* <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"/> */}
            <textarea className="message" rows="4" class="resize-none p-2.5 w-11/12 ml-7 mt-2 rounded-lg ring-2 ring-black" placeholder="กรุณากรอกรายละเอียด..."></textarea>
        
            {/* สวัสดิการ */}
            <div class="pt-3">
                
            <Typography variant="body1">
                สวัสดิการ
            </Typography>
            
            </div>
            <textarea className="message" rows="4" class="resize-none p-2.5 w-11/12 ml-7 mt-2 rounded-lg ring-2 ring-black" placeholder="กรุณากรอกรายละเอียด..."></textarea>
            

            {/* คุณสมบัติของผู้สมัคร */}
            <div class="pt-3">
            <Typography variant="body1">
                คุณสมบัติของผู้สมัคร
            </Typography>
            <div class="flex space-x-6 pt-2">
                <div class="flex space-x-1">
                <Typography variant="body2">
                        มหาลัย
                </Typography>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[120px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
                </select>
                </div>

                <div class="flex space-x-1">
                <Typography variant="body2">
                        คณะ
                </Typography>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[120px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
                </select>
                </div>

                <div class="flex space-x-1">
                <Typography variant="body2">
                        สาขา
                </Typography>
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[120px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
                </select>
                </div>
                
            </div>
            </div>
            

            </div>
        </div>
        </div>
        </ThemeProvider>
    );
}