import React from "react";
import { Box, Typography, Grid, List, ListItem, ListItemText, IconButton, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import footerData from "../../datafiles/FooterData";

function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: "rgb(93, 98, 98)", color: "white", p: 4, mt: 4 ,borderRadius:"10px", paddingLeft:"10rem",paddingRight:"10rem"}}>
      <Grid container spacing={4} justifyContent="center">
        
        {/* About Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">{footerData[0].heading}</Typography>
          <img
            src={footerData[0].about.logo}
            alt="Company Logo"
            style={{ width: "120px", marginBottom: "10px" }}
          />
          <Typography variant="body2">{footerData[0].about.description}</Typography>
          <Box>
            {footerData[0].about.socialLinks.map((social, index) => {
              const Icon = social.icon === "facebook" ? Facebook :
                           social.icon === "twitter" ? Twitter :
                           social.icon === "instagram" ? Instagram :
                           LinkedIn;
              return (
                <IconButton key={index} href={social.url} target="_blank" sx={{ color: "white" }}>
                  <Icon />
                </IconButton>
              );
            })}
          </Box>
        </Grid>

        {/* Useful Links */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">{footerData[1].heading}</Typography>
          <List>
            {footerData[1].usefulLinks.map((link, index) => (
              <ListItem key={index} disablePadding>
                <ListItemText>
                  <Link href={link.path} color="inherit" underline="hover">
                    {link.title}
                  </Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Our Services */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">{footerData[2].heading}</Typography>
          <List>
            {footerData[2].services.map((service, index) => (
              <ListItem key={index} disablePadding>
                <ListItemText primary={service} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">{footerData[3].heading}</Typography>
          <Typography variant="body2">{footerData[3].contact.address}</Typography>
          <Typography variant="body2">Phone: {footerData[3].contact.phone}</Typography>
          <Typography variant="body2">
            Email:{" "}
            <Link href={`mailto:${footerData[3].contact.email}`} color="inherit" underline="hover">
              {footerData[3].contact.email}
            </Link>
          </Typography>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box sx={{ textAlign: "center", mt: 3, pt: 2, borderTop: "1px solid gray" }}>
        <Typography variant="body2">© 2024 Devcons Software Solutions Pvt. Ltd. All Rights Reserved</Typography>
      </Box>
    </Box>
  );
}

export default Footer;
