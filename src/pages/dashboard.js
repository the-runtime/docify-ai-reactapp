import React, { useState } from 'react';
import {
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
    CssBaseline,
    Paper,
    Container,
    MenuItem,
    FormControl, InputLabel, Select
} from '@mui/material';
import "./dashboard.css"
import Basepage from "./Basepage";
import {Link, Router} from "react-router-dom";
function Dashboard() {
    const [repoUrl, setRepoUrl] = useState('');
    const [repoInfo, setRepoInfo] = useState();
    const [selectedOption, setSelectedOption] = useState('')
    const fetchRepositoryInfo = async () => {
        try {
            // Fetch repository info using the GitHub API or your preferred method
            // Replace this with your actual API call
            const repo_url_list = repoUrl.split("/")
            const repo_name = repo_url_list[3] + "/" + repo_url_list[4]
            //Also fetch repos branch info to let user select which branch they want to document
            const repo_branch_url = `https://api.github.com/repos/${repo_name}/branches`
            const response = await fetch(repo_branch_url);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setRepoInfo(data);
                setSelectedOption(data[0].name)
            } else {
                // Handle errors
                setRepoInfo(null);
            }
        } catch (error) {
            // Handle errors
            console.error(error);
        }
    };

    const handleChange = (event) => {
        setSelectedOption(event.target.value)
    }

    return (
        <div className="dashboard-container">
            <Card className='input-card'>
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
                <Card className='repo-info-card'>
                    <CardContent>
                       <FormControl>
                           <InputLabel>Select branch</InputLabel>
                           <Select
                               value= {selectedOption}
                               onChange={handleChange}
                               >
                               {repoInfo.map((branch, index)=>(
                                   <MenuItem key={index} value={branch.name}>
                                       {branch.name}
                                   </MenuItem>
                               ))}
                           </Select>
                       </FormControl>
                        <p>Selected Branch: {selectedOption}</p>
                            <Link to={`http://127.0.0.1:8080/api/start/?repo=${repoUrl}/${selectedOption}`}>
                                <Button variant="contained" color="primary">
                                    Generate Document
                                </Button>
                            </Link>
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
        <Basepage name="Dashboard">
            <DashboardComp/>
        </Basepage>
    )
})
export default DashboardPage;
