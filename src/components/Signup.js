import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Products from "./Products";
import { Link } from "react-router-dom";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value)
  }
  const ageHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  
  // const handleSubmit = () => {
      
  //   // if (enteredAge < 13) {
  //   //   alert("you are under age");
  //   // //   error("Please enter a valid age");
  //   // } else {
  //   //   alert("you are eligible for SignUp");
  //   // }
  // };


      useEffect (() => {
        if(enteredAge > 13) {

            alert("Here is useEffect Run");
        }
      },[enteredAge]);

  return (
    <>
      <CssBaseline />
      <Container>
        <Box
          sx={{
            display: "grid",
            "& > :not(style)": { m: 2 },
            width: "100vh",
            my: "5vh",
            mx: "50vh",
          }}
        >
          <div>
            <h1>SignUp</h1>
          </div>

          <TextField label='Name' value={name} onChange={nameHandler}/>
          <TextField label='Email' value={email}/>
          <TextField label='Age' value={enteredAge} onChange={ageHandler} />

          <div>
            <Stack direction='row'>
              <Button variant='contained' >
                SignUp
              </Button>
              <hr/>
             <Link to="/Products" type="button" variant="contained">Go to Product Page</Link>
            </Stack>
          </div>
        </Box>
      </Container>
    </>
  );
}

export default Signup;
