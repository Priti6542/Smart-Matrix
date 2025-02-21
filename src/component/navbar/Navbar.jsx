import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Box, Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuIcon from '@mui/icons-material/Menu';
import NavbarData from '../../datafiles/NavbarData';

function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <AppBar position="sticky" sx={{ px: 2 }}>
                <Toolbar>
                    {/* Logo / Icon */}
                    <IconButton edge="start" color="inherit">
                        <LocalLibraryIcon />
                    </IconButton>

                    {/* Desktop Navbar Links */}
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: 'flex-end', gap: 2 }}>
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

                    {/* Mobile Menu Icon */}
                    <IconButton sx={{ display: { md: "none" } }} onClick={handleDrawerToggle} color="inherit">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                <List sx={{ width: 250 }}>
                    {NavbarData.map((item, index) => (
                        <ListItem button key={index} component={Link} to={item.path} onClick={handleDrawerToggle}>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}

export default Navbar;
