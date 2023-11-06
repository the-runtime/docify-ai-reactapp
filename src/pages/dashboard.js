import React, { useState } from 'react';
import {Card, CardContent, TextField, Button, Typography, CssBaseline, Paper, Container} from '@mui/material';
import "./dashboard.css"
import Basepage from "./Basepage";
function Dashboard() {
    const [repoUrl, setRepoUrl] = useState('');
    const [repoInfo, setRepoInfo] = useState(null);

    const fetchRepositoryInfo = async () => {
        try {
            // Fetch repository info using the GitHub API or your preferred method
            // Replace this with your actual API call
            const response = await fetch(`https://api.github.com/repos/${repoUrl}`);
            if (response.ok) {
                const data = await response.json();
                setRepoInfo(data);
            } else {
                // Handle errors
                setRepoInfo(null);
            }
        } catch (error) {
            // Handle errors
            console.error(error);
        }
    };

    return (
        <div className="dashboard-container">
            <Card>
                <CardContent>
                    <Typography variant="h5" component="div">
                        Enter GitHub Repository URL
                    </Typography>
                    <TextField
                        label="Repository URL"
                        variant="outlined"
                        fullWidth
                        value={repoUrl}
                        onChange={(e) => setRepoUrl(e.target.value)}
                    />
                    <Button variant="contained" onClick={fetchRepositoryInfo}>
                        Submit
                    </Button>
                </CardContent>
            </Card>

            {repoInfo && (
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Repository Information
                        </Typography>
                        <Typography variant="body2">Name: {repoInfo.name}</Typography>
                        <Typography variant="body2">Stars: {repoInfo.stargazers_count}</Typography>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
function DashboardComp(){
    return (
        <div className="app">
            <CssBaseline />
            <Container className="content">
                <Dashboard />
            </Container>
        </div>
    );
}

const DashboardPage = (() => {
    return (
        <Basepage>
            <DashboardComp/>
        </Basepage>
    )
})
export default DashboardPage;
