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
import './Login.css';



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
            {/* ฟอร์มแถบขาว */}
            <Box id="white-form"
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

                <Box id="form-write" onSubmit={handleSubmit} noValidate sx={{ mt: 1 ,maxWidth: '70%',marginTop:5}}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="รหัสผ่าน"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ mt: 5}}
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
            เข้าสู่ระบบ
            </div>
            </Button>


            {/* link 2 อันล่าง */}
            <Grid container justifyContent="flex-end" alignItems="flex-end">
              <Grid item >
                <Link href="#" style={{fontSize: "18px",color: "black"}} variant="body2" underline="hover">
                  <div className="forgot-pass">
                  ลืมรหัสผ่าน?    
                  </div>
                </Link>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end" alignItems="flex-end">
              <Grid item>
                <Link href="#" style={{fontSize: "18px",color: "black"}} variant="body2" underline="hover">
                  <div className="sign-up-user">
                  ลงทะเบียนสำหรับผู้ใช้ใหม่    
                  </div>
                </Link>
              </Grid>
            </Grid>
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
                <div className="head-login">
                    
                    <h1>เข้าสู่ระบบ</h1>
                    
                </div>
                
            </Box>

            
        </Grid>
    );
    
}