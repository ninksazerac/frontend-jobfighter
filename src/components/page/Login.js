import React from "react";
import Box from '@mui/material/Box';
import { Grid, makeStyles, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import logo from './pics/Lovepik_com-401693242-office-girl.png';
import './Login.css';
import { ClassNames, useTheme } from "@emotion/react";
import { useMediaQuery } from 'react-responsive';


const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    email: data.get('email'),
    password: data.get('password'),
  });
};

// const useStyles = makeStyles((theme) =>({
//   custom:{
//     color : "#00EE00",
//     fontSize: 30
//   }
// }));

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs : 0,
//       sm : 600,
//       md: 900,
//       lg: 1280,
//       xl: 1920
//     }
//   }
// })

export default function Login(){
    // const classes = useStyles();
    // const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.down("xs"));
    return(
        // ลองใช้ mui
        <Grid className="layout">

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
            <Grid className="form1">
            <Box className="box-form"
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
            <Grid className="form" container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center">

                <Box id="form-write" onSubmit={handleSubmit} noValidate sx={{ mt: 1 ,width: 450,marginTop:5}}>
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
              sx={{ mt: 5}}
              variant="outlined"
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
                <Link href="/forgotpass" style={{fontSize: "18px",color: "black"}} variant="body2" underline="hover">
                  <div className="forgot-pass">
                  ลืมรหัสผ่าน?    
                  </div>
                </Link>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end" alignItems="flex-end">
              <Grid item>
                <Link href="/signupuser" style={{fontSize: "18px",color: "black"}} variant="body2" underline="hover">
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
          <Box className="green-form"
            sx={{
                width: 600,
                height: 120,
                my: -96,
                mx: 95,
                backgroundColor : '#69F0AE',
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                textAlign: 'center',
                // paddingTop: 0
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}>
                    <h1>เข้าสู่ระบบ</h1>
          </Box>
            
            
            
          </Grid> 
           
       
        </Grid>
    );  
}