import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Link,
  Typography,
  Box,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import {auth} from "../firebase"
import { signInUser } from "../firebase";

const LoginPage = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const onLogin = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentails) => {
            //signed in here
            const user = userCredentails.user;
            navigate("/movies")
            console.log(user);
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
        <Button variant="contained" color="primary" fullWidth onClick={onLogin}>
          Login
        </Button>
        <Typography variant="body2" textAlign="center">
          Don't have an account? <Link href="/movies/signup">Register</Link>
        </Typography>
      </Box>
    </Container>
    </>
  );
};

export default LoginPage;
