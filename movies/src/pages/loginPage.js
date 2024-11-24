import React, { useState,useEffect } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

import { signOut } from "firebase/auth";
import {auth} from "../firebase"
import { signInUser } from "../firebase";

const LoginPage = () => {
const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=> {
            if(user){
                setUser(user);
            }else{
                setUser(null);
            }
  })
    });
 
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

        const logout = () => {
            signOut(auth).then(() =>{
                navigate("/movies/login");
                    console.log("Signed out")

            }).catch((error)=> {
            });
        
        
  };
  if (user){
    return(
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="h6" component="p" style={{ marginBottom: '10px' }}>
          You are already logged in successfully. Enjoy the website.
      </Typography>
      <button 
          onClick={logout} 
          style={{
              padding: '10px 20px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
          }}
      >
          Logout
      </button>
  </div>
    )
  }
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
