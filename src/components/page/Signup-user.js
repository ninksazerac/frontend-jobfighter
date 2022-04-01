import React from "react";
import Box from '@mui/material/Box';
import { Grid, Icon } from "@mui/material";
import Paper from '@mui/material/Paper';
import { Rectangle } from "@mui/icons-material";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import logo from './pics/—Pngtree—cartoon office top view download_4440227.png'
import './Signup-user.css';



export default function Login(){

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };
      const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return(
        // ลองใช้ mui
        
        <Grid className="layout">
          <Grid className="image">
            <Box className="image"
            component={"img"}
            src={logo}
            />

            
          </Grid>
            {/* ฟอร์มแถบขาว */}
            <Box id="white-form"
            sx={{
                width: 600,
                height: 450,
                my: 30,
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

            <Box id="form-write" onSubmit={handleSubmit} noValidate sx={{ mt: 2 ,width: 450}}>
            <TextField className="e-mail"
              margin="normal"
              // ดอกจัน
              // required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              variant="outlined"
            />
            <TextField className="cfe-mail"
              margin="normal"
              // ดอกจัน
              // required
              fullWidth
              id="cfemail"
              label="Confirm E-mail"
              name="cfemail"
              autoComplete="email"
              autoFocus
              sx={{ mt: 2}}
              variant="outlined"
            />
            <TextField className="password"
              margin="normal"
              // ดอกจัน
              // required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ mt: 2}}
              variant="outlined"
            />
            <TextField className="cfpassword"
              margin="normal"
              // ดอกจัน
              // required
              fullWidth
              name="cfpassword"
              label="Confirm Password"
              type="password"
              id="cfpassword"
              autoComplete="current-password"
              sx={{ mt: 2}}
              variant="outlined"
            />

            <Button className="button-login"
            style={{
                borderRadius: 20,
                backgroundColor: "#24AB82",
                padding: "10px 36px",
                fontSize: "18px"
            }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 ,color: 'white'}}
            >
            <div className="button-signup">
            สมัครสมาชิก
            </div>
            </Button>
          </Box>
          </Grid>
          </Box>

            <Grid>
            {/* หัวข้อแถบเขียว */}
            <Box className="green"
            sx={{
                width: 600,
                height: 120,
                my: -101,
                mx: 95,
                backgroundColor : '#69F0AE',
                
                borderTopRightRadius: '20px'
            }}>
              <div className="head-signup1"> 
                    <h1>ลงทะเบียนสำหรับ</h1>
                </div>
                <div className="head-signup2"> 
                    <h1>นักศึกษาจบใหม่</h1> 
                </div>
          
          <Button className="buttonuser"
          variant="contained"
          sx={{
          visibility: 'visible',
          borderTopLeftRadius: 20,
          borderTopRightRadius:20,
          borderBottom:0,
          boxShadow:0,
          inlineSize:0
          }}>
          <div className="icon-user">
            <PersonIcon fontSize='large'/>
            </div>
          <div className="user">
          นักศึกษา
          </div>
            </Button>
          
          <Button className="buttoncompany"
          variant="contained"
          sx={{
          visibility: 'visible',
          borderTopLeftRadius: 20,
          borderTopRightRadius:20,
          borderBottom:0,
          boxShadow:0,
          inlineSize:0
          }}>
          <div className="icon-company">
            <BusinessIcon fontSize='large'/>
            </div>
          <div className="company">
          บริษัท
          </div>
            </Button>
          
            </Box>
            </Grid>
            

              
            

            
        </Grid>
        
    );
    
}