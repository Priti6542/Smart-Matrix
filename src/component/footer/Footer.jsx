import React from "react";
import { Box, Typography, Button, Divider, Grid, IconButton } from "@mui/material";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#212121", color: "#bdbdbd", py: 6, px: 3 }}>
      {/* CTA Section */}
      <Box maxWidth="lg" mx="auto" textAlign={{ xs: "center", md: "left" }}>
        <Typography variant="caption" textTransform="uppercase" color="gray">
          Get started
        </Typography>
        <Typography variant="h5" fontWeight="bold" color="white" mt={1}>
          Boost your productivity. <br /> Start using our app today.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 3, bgcolor: "#ff7043", ":hover": { bgcolor: "#f4511e" } }}
        >
          Get Started
        </Button>
      </Box>

      {/* Footer Links Section */}
      <Divider sx={{ my: 5, bgcolor: "#424242" }} />
      <Grid container spacing={1} maxWidth="lg" mx="auto">
        <Grid item xs={12} md={3} textAlign={{ xs: "center", md: "left" }}>
          <img src="https://smartmatrixds.com/assets/img/smds-logo.jpeg" alt="Company Logo" style={{ height: 40 }} />
        </Grid>
        
        {["Solutions", "Support", "Company"].map((section, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Typography variant="subtitle1" color="white" fontWeight="bold">
              {section}
            </Typography>
            <Box mt={2}>
              {section === "Solutions" && ["Marketing", "Analytics", "Automation", "Commerce", "Insights"].map((item) => (
                <Typography key={item} variant="body2" sx={{ cursor: "pointer", ":hover": { color: "white" } }}>
                  {item}
                </Typography>
              ))}
              {section === "Support" && ["Submit ticket", "Documentation", "Guides"].map((item) => (
                <Typography key={item} variant="body2" sx={{ cursor: "pointer", ":hover": { color: "white" } }}>
                  {item}
                </Typography>
              ))}
              {section === "Company" && ["About", "Blog", "Jobs", "Press"].map((item) => (
                <Typography key={item} variant="body2" sx={{ cursor: "pointer", ":hover": { color: "white" } }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
      
      {/* Social Media & Copyright */}
      <Divider sx={{ my: 5, bgcolor: "#424242" }} />
      <Box maxWidth="lg" mx="auto" textAlign="center" display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center">
        <Typography variant="body2" color="gray">© 2024 Your Company, Inc. All rights reserved.</Typography>
        <Box mt={{ xs: 2, md: 0 }}>
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
            <IconButton key={index} sx={{ color: "gray", ":hover": { color: "white" } }}>
              <Icon size={18} />
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
