import React from "react";
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import "./Applyjob.css";


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
        <div className=" w-200  bg-gray-200  shadow-lg md:drop-shadow-xl rounded-lg mt-8 mx-10 mb-10 shadow-black">
          <div className="flex space-x-5 ">
        
            <svg class="h-32 w-32 text-black mt-3 ml-7 bg-gray-300 rounded-lg shadow-sm"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
        
          <div className="flex-col space-y-5">
            <div className="mt-4">
              <Typography variant="body1">
                บริษัท
              </Typography>
            </div>
            <div>
              <Typography variant="body2">
                วันที่โพสต์ : 
              </Typography>
            </div>
          </div>

          </div>
          <div className="pl-7 pt-3">
            <Typography variant="body1">
                รายละเอียดงาน
            </Typography>
            {/* <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"/> */}
            <textarea className="message" rows="4" class="resize-none p-2.5 w-11/12 ml-7 mt-2 rounded-lg ring-2 ring-black"></textarea>
        
            {/* สวัสดิการ */}
            <div className="pt-3">
            <Typography variant="body1">
                สวัสดิการ
            </Typography>
            </div>
            <textarea className="message" rows="4" class="resize-none p-2.5 w-11/12 ml-7 mt-2 rounded-lg ring-2 ring-black"></textarea>
            

            {/* คุณสมบัติของผู้สมัคร */}
            <div className="pt-3">
            <Typography variant="body1">
                คุณสมบัติของผู้สมัคร
            </Typography>
            <div className="flex space-x-6 pt-2">
                <div className="flex space-x-2">
                <Typography variant="body2">
                        มหาลัย
                </Typography>
                <input className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5"/>
                </div>

                <div className="flex space-x-2">
                <Typography variant="body2">
                        คณะ
                </Typography>
                <input className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5"/>
                </div>

                <div className="flex space-x-2">
                <Typography variant="body2">
                        สาขา
                </Typography>
                <input className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5"/>
                </div>
                
              </div>


              <div className="flex space-x-6 pt-3">
                <div className="flex space-x-2">
                <Typography variant="body2">
                        ประเภทงาน
                </Typography>
                <input className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5"/>
                </div>

                <div className="flex space-x-2">
                <Typography variant="body2">
                        ตำแหน่ง
                </Typography>
                <input className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5"/>
                </div>

                {/* เช็คใน input ใส่ได้แค่เลข */}
                <div className="flex space-x-2">
                <Typography variant="body2">
                        เงินเดือน
                </Typography>
                <input type="number"
                className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[80px] p-2.5"
                placeholder="ต่ำสุด"></input>
                <Typography variant="body2">
                        -
                </Typography>
                <input type="number"
                className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[80px] p-2.5"
                placeholder="สูงสุด"></input>
                </div>
                
              </div>
            </div>


            <div className="flex space-x-6 pt-12">
                <div className="flex space-x-2">
                <Typography variant="body2">
                        อัตราที่รับ
                </Typography>
                <input type="number"
                className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[80px] p-2.5"
                placeholder="จำนวน"></input>
                
                </div>

                <div className="flex space-x-2">
                <Typography variant="body2">
                        จังหวัดของสถานประกอบการ
                </Typography>
                <input className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5"/>
                </div>

                {/* เช็คใน input ใส่ได้แค่เลข */}
                <div className="flex space-x-2">
                <Typography variant="body2">
                        ระยะเวลาการโพสต์
                </Typography>
                <input className="text-black text-sm rounded-lg ring-2 ring-black focus:ring-black-500 focus:border-black-500 block w-[250px] p-2.5"/>
                </div>
                
              </div>
            </div>
            
            
            {/* สถานที่ประกอบการของบริษัท */}
            <div className="pl-7 pt-3">
            <Typography variant="body1">
              สถานที่ประกอบการของบริษัท
            </Typography>
            <textarea className="message" rows="4" class="resize-none p-2.5 w-11/12 ml-6 mt-2 rounded-lg ring-2 ring-black"></textarea>
            </div>
            
            {/* Tags */}
            <div className="pl-7 pt-3 flex space-x-4">
            <Typography variant="body1">
              Tags : 
            </Typography>

              {/* เดะไว้แสดง tags */}
              <div className="flex space-x-2">

              <div className="h-10 px-2 py-2 rounded-lg bg-white shadow-sm">
                <Typography variant="body2">
                  ประเภทงาน 
                </Typography>
              </div>
              <div className="h-10 px-2 py-2 rounded-lg bg-white shadow-sm">
                <Typography variant="body2">
                  ประเภทงาน 
                </Typography>
              </div>

              </div>

            </div>

            <div className="pl-96 pt-5 pb-4 flex space-x-4">
            <Typography variant="body1">
                  แนบไฟล์ Resume :  
                </Typography>
            <div className="h-10 w-80 mb-2">
                        <input class="form-control
                        block
                        w-full
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded-lg
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-green-300 focus:outline-none" type="file" id="formFile"/>
                    </div>
            

            </div>
            <div class="flex items-center justify-center">
            <button
              class="bg-[#24AB82] drop-shadow-md font-bold text-white text-2xl rounded-xl px-6 py-2.5 mt-3 mb-4 hover:bg-[#1F795E] hover:ring-2 hover:ring-white focus:ring-2 focus:ring-white focus:outline-none "
            >
              <div className="flex space-x-2">
              <svg class="h-8 w-8 mt-1 text-yellow-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"  stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" /></svg>
              <Typography variant="body1">
              สมัครงาน
              </Typography>
              </div>
                  </button>
            </div>


        </div>
        </ThemeProvider>
    );
}