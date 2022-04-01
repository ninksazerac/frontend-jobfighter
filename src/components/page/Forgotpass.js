import React from "react";
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import { Rectangle } from "@mui/icons-material";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import logo from './pics/Lovepik_com-401693242-office-girl.png'
import './Forgotpass.css';



export default function Login(){
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
    return(
        // ลองใช้ mui
        <Grid id="layout">

          <Grid className="image">
            <Box className="image"
            component={"img"}
            src={logo}
            sx={{
              mt:15
            }}
            />
          </Grid>
          
            {/* ฟอร์มแถบขาว */}
            <Box className="white-form"
            sx={{
                width: 600,
                height: 450,
                my: 25,
                mx: 95,
                backgroundColor: 'white',
                // display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: 20,
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px'
                
            }}>


            {/* จัดรูปแบบที่จะกรอก */}
            <Grid id="form" container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center">

                <Box id="form-write" onSubmit={handleSubmit} noValidate sx={{ mt: 1 ,width: 450,marginTop:4}}>
            <div className="detail-forgot" >
                <h3>กรุณากรอกอีเมลที่คุณลงทะเบียนไว้</h3>
                <h3>ระบบจะส่งลิงก์ไปยังอีเมลเพื่อให้คุณตั้งรหัสผ่านใหม่</h3>
            </div>
            <TextField className="e-mail"
              margin="normal"
              // required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            
            <Button id="button-login"
            style={{
                borderRadius: 20,
                backgroundColor: "#24AB82",
                padding: "10px 36px",
                fontSize: "18px"
            }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 2 ,color: 'white'}}
            >
            <div className="button-login">
            ส่ง
            </div>
            </Button>


            
          </Box>
          </Grid>
          </Box>


            {/* หัวข้อแถบเขียน */}
            
            <Box id="green-form"
            sx={{
                width: 600,
                height: 120,
                my: -96,
                mx: 95,
                backgroundColor : '#69F0AE',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px'
            }}>
                <div className="head-forgot-pass">
                    
                    <h1>ลืมรหัสผ่าน</h1>
                    
                </div>   
            </Box>
            

            
        </Grid>
    );
    
}