import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { Google } from '@mui/icons-material';
import {Link} from "react-router-dom"
import './LoginSignup.css';
import Basepage from "./Basepage";

function LoginSignup() {
    return (
        <div className="login-signup-container">
            <Card className="auth-card">
                <CardContent>
                    <Typography variant="h5" component="div">
                        Login or Sign Up
                    </Typography>
                    <Link to="http://127.0.0.1:8080/auth/google">
                    <Button
                        variant="contained"
                        color="primary"
                        className="google-login-button"
                        startIcon={<Google />}
                        onClick={handleGoogleLogin}
                    >
                        Continue with Google
                    </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    );
}

function handleGoogleLogin() {
    // Handle Google login functionality here
    console.log('User clicked Google login');
}

const LoginPage = ( () => {
    return (
        <Basepage name="Login">
        <LoginSignup/>
        </Basepage>
    )
})

export default LoginPage;
