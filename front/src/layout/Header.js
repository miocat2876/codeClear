import React from 'react';
import {AppBar,Toolbar,IconButton,Typography,Container,Grid,Card,CardContent,CardActions,Button,CardMedia} from '@material-ui/core';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
    return (
        <>
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <HomeIcon  />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                CodeClear
                </Typography>
            </Toolbar>
        </AppBar>
        </>
    );
};

export default Header;