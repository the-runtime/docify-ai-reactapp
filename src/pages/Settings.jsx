import React, {useEffect, useState} from 'react';
import {Button, Card, CardContent, Typography} from '@mui/material';
import './Settings.css';
import Basepage from "./Basepage";

function Settings() {
    const [data, setData] = useState()
    useEffect(() => {
        getUserInfo().then(data => {
            setData(data)
            console.log(data)
        })
    }, [])
    if (!data){
        return null
    }

    return (
        <div className="settings-container">
            <Card className="settings-card">
                <CardContent>
                    <Typography variant="h5" component="div">
                        Account Settings
                    </Typography>
                    <div className="account-info">
                        <Typography variant="body2">Username:{data.name}</Typography>
                        <Typography variant="body2">Email:{data.email}</Typography>
                        <Typography variant="body2">Remaining Credits: {data.credits}</Typography>
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


async function getUserInfo() {
    const url = "http://127.0.0.1:8080/api/userinfo"
    const resp = await fetch(url,{
        method: 'Get',
        credentials: 'include'
    })
    if (resp.ok) {
        return await resp.json()
    }else {
    //     send a notification to login again because of expired token
        console.log("Token expired")
    }
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
        <Basepage name="Settings">
            <Settings/>
        </Basepage>
    )
})
export default SettingsPage;
