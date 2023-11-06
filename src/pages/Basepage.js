import React from "react"
import {AppBar, Container, CssBaseline, Paper, Toolbar, Typography} from "@mui/material";

 function Basepage({children, name}) {
    return (
        <div className="base-container">
            <CssBaseline/>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant='h6'> Docify-ai</Typography>
                </Toolbar>
            </AppBar>
            <Container className="base-content">
                <Paper elevation={3} className="card">
                    <h2>
                        {name}
                    </h2>
                    {children}
                </Paper>
            </Container>
        </div>
    )
}

export default Basepage