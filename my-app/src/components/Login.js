//import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { Avatar, Button, Paper, TextField, Typography, Link } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LockIcon from '@mui/icons-material/Lock';


import { useFormik } from 'formik';
import * as yup from "yup";
import Box from '@mui/material/Box';


const formValidationSchema = yup.object({
  userName: yup
      .string("Enter your user name")
      .required("Your user name is required"),
  password: yup
      .string("Enter your password")
      .required("Password required")
})



const Login=()=> {


  const formik = useFormik({
    initialValues: {
      firstName:"",
      lastName:"",
      emailAddress:"",
      userName:"",
      password: ""

    },
    validationSchema: formValidationSchema,
    onSubmit:(values) => {
      axios.post('http://localhost:8080/api/v1/login', values)
      .then(response => {
        console.log(response);
      })
    }
  })
    

    const paperStyle={
        padding: "20px",
        height: "70vh",
        width: 280,
        margin: "20px auto"
    }
    const avatarStyle={
        backgroundColor: "green"
    }
    const textfield={
        margin: '10px'
    }
    const btnstyle={
        margin:'8px 0'
    }
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <Avatar style={avatarStyle}><LockIcon></LockIcon></Avatar>
                <h4>Login</h4>
                </Grid>
               

          <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>

                <TextField
                    label='Username'
                    placeholder='Enter Username'
                    style={textfield}
                    fullWidth
                    required
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                    error={formik.touched.userName && Boolean(formik.errors.userName)}
                    helperText={formik.touched.userName && formik.errors.userName}
                    id = "userName"
                    name = "userName"
                    >
                </TextField>


                <TextField
                    label='Password'
                    placeholder='Enter Password'
                    type='password'
                    style={textfield}
                    fullWidth
                    required
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    id = "password"
                    name = "password"
                    >
                </TextField>


                <FormControlLabel
                    control={
                        <Checkbox
                            name='Checked'
                            color="primary"
                        />}
                    label='Remember me'
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={btnstyle}
                    fullWidth
                >
                    Sign In
                </Button>
                <Typography
                    style={textfield}>
                    <Link href="#">
                        Forgot password?
                    </Link>
                </Typography>
                <Typography
                    style={textfield}>
                    <Link href="/signUp">
                        Don't have an account? Sign Up
                    </Link>
                </Typography>
                <Typography
                    style={textfield}>
                    <Link href="/">
                        Home
                    </Link>
                </Typography>
              </Box>
            </Paper>
        </Grid>
    )
}
export default Login;