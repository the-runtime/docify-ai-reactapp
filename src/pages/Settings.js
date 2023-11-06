import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import './Settings.css';
import Basepage from "./Basepage";

function Settings() {
    return (
        <div className="settings-container">
            <Card className="settings-card">
                <CardContent>
                    <Typography variant="h5" component="div">
                        Account Settings
                    </Typography>
                    <div className="account-info">
                        <Typography variant="body2">Username: YourUsername</Typography>
                        <Typography variant="body2">Email: your.email@example.com</Typography>
                        <Typography variant="body2">Remaining Credits: 50</Typography>
                    </div>
                    <Button variant="contained" color="primary" onClick={handleSignOut}>
                        Sign Out
                    </Button>
                    <Button variant="contained" color="error" onClick={handleDeleteAccount}>
                        Delete Account
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}

function handleSignOut() {
    // Handle sign-out functionality here
    console.log('User clicked Sign Out');
}

function handleDeleteAccount() {
    // Handle account deletion functionality here
    console.log('User clicked Delete Account');
}

const SettingsPage = (() => {
    return (
        <Basepage>
            <Settings/>
        </Basepage>
    )
})
export default SettingsPage;
