import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Box, Button, Drawer, List, ListItem, ListItemText, Typography } from "@mui/material";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close'; // Import Close Icon
import NavbarData from '../../datafiles/NavbarData';

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <AppBar position="sticky" sx={{ px: 2 }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

                    {/* Logo / Icon */}
                    <IconButton edge="start" color="inherit" component={Link} to="/">
    <img 
        src="https://smartmatrixds.com/assets/img/smds-logo.jpeg"  // Replace with actual logo path
        alt="Logo" 
        style={{ height: "40px", width: "auto" }} 
    />
</IconButton>

                    {/* Desktop Navbar Links */}
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'center', gap: 2 }}>
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

                    {/* Mobile Menu Icon (Aligned to Right) */}
                    <Box sx={{ display: { md: "none" }, marginLeft: "auto" }}>
                        <IconButton onClick={handleDrawerToggle} color="inherit">
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                <Box sx={{ width: 250, position: "relative" }}>
                    {/* Close Button */}
                    <IconButton
                        onClick={handleDrawerToggle}
                        sx={{ position: "absolute", right: 10, top: 10 }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Navigation Links */}
                    <List sx={{ mt: 5 }}> {/* Adds margin-top to prevent overlap */}
                        {NavbarData.map((item, index) => (
                            <ListItem button key={index} component={Link} to={item.path} onClick={handleDrawerToggle}>
                                <ListItemText primary={item.title} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}

export default Navbar;
