import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

import { signUpUser } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupPage = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const onSubmit = async (e) =>{
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentails) => {
            const user = userCredentails.user;
            navigate("/movies/login")
        
        })
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
    
  };
  return (
    <>
    <Paper 
      component="div" 
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: 1.5,
      }}
      >
      <Typography variant="h4" component="h3">
        Login
      </Typography>
    </Paper>
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        
        <TextField
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          variant="outlined"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          variant="outlined"
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
        </Box>
        <Button variant="contained" color="primary" fullWidth onClick={onSubmit}>
          Register
        </Button>
      </Box>
    </Container>
    </>
  );
};

export default SignupPage;
