import React from "react";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container } from "@mui/material";


import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from "yup";

// function createData(number, item, qty, price) {
//   return { number, item, qty, price };
// }

const formValidationSchema = yup.object({
  userName: yup
      .string("Enter your user name")
      .required("Your user name is required"),
  password: yup
      .string("Enter your password")
      .required("Password required")
})



export default function BasicTable() {
const formik = useFormik({
  initialValues: {
      firstName:"",
      lastName:"",
      email:"",
      userName:""//,
      // password:""
  },
  validationSchema: formValidationSchema,
  onSubmit:(values) => {
    axios.get("http://localhost:8080/api/v1/login")
    .then(response => {
      console.log(response);
    })
  }
})


const rows = [
  "id", "firstName", "lastName", "email", "userName"
];


  return (



    <Container sx={{
      marginTop: 15}}
      >
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">User Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.number}>
              <TableCell component="th" scope="row">
                {row.number}
              </TableCell>
              <TableCell align="right">{formik.touched.firstName}</TableCell>
              <TableCell align="right">{formik.touched.lastName}</TableCell>
              <TableCell align="right">{formik.touched.email}</TableCell>
              <TableCell align="right">{formik.touched.userName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
