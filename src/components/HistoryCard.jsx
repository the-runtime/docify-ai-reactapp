import React from 'react';
import {Card, CardContent, List, ListItem, ListItemText, ListItemIcon, Typography} from "@mui/material";
import {Download as DownloadIcon} from "@mui/icons-material";

const DocumentHistoryCard = ({ documentHistory}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Document Generation History
                </Typography>
                <List>
                    {documentHistory.map((document, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <DownloadIcon/>
                            </ListItemIcon>
                            <ListItemText primary={document.date} secondary={<a href={document.downloadLink}>Download Document</a> }/>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    )
}

export default DocumentHistoryCard