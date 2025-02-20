import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from "@mui/material";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import NavbarData from '../../datafiles/NavbarData';

function Navbar() {
    return (
        <AppBar position="sticky" sx={{ px: 2 }}>
            <Toolbar>
                {/* Logo / Icon */}
                <IconButton edge="start" color="inherit" >
                    <LocalLibraryIcon />
                </IconButton>

                {/* Navbar Links */}
                <Box sx={{ flexGrow: 1, display: "flex", justifyContent:'flex-end', gap: 2 }}>
                    {NavbarData.map((item, index) => (
                        <Button
                            key={index}
                            component={Link}
                            to={item.path}
                            color="inherit"
                            sx={{ textTransform: "none" }}
                        >
                            {item.title}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
