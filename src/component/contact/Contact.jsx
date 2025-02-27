import React from "react";
import { Box, Typography, TextField, Button, Grid, Paper, IconButton } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";

const ContactUs = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 6,
        bgcolor: "white",
      }}
    >
      <Grid container spacing={4} maxWidth="900px" alignItems="stretch">
        {/* Left Section: Contact Info */}
        <Grid item xs={12} md={5} display="flex">
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2, width: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Typography variant="h4" fontWeight="bold" color="orange">
              Get in Touch
            </Typography>
            <Typography variant="body1" color="text.secondary" mt={1}>
              Reach out to us with any questions or concerns. We're here to help!
            </Typography>

            <Box mt={3} display="flex" flexDirection="column" gap={2}>
              <Box display="flex" alignItems="center" gap={2}>
                <IconButton sx={{ color: "orange" }}>
                  <LocationOn />
                </IconButton>
                <Box>
                  <Typography variant="body1" color="text.primary">
                    545 Mavis Island
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Chicago, IL 99191
                  </Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <IconButton sx={{ color: "orange" }}>
                  <Phone />
                </IconButton>
                <Typography variant="body1" color="text.primary">
                  +1 (555) 234-5678
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={2}>
                <IconButton sx={{ color: "orange" }}>
                  <Email />
                </IconButton>
                <Typography variant="body1" color="text.primary">
                  hello@example.com
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Right Section: Contact Form */}
        <Grid item xs={12} md={7} display="flex">
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2, width: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="First Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Last Name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Email" type="email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Phone Number" type="tel" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Message" multiline rows={4} variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="warning"
                    fullWidth
                    sx={{ py: 1.5 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>

      {/* Google Map Section */}
      <Box
  sx={{
    mt: 4,
    // borderRadius: "5px",
    width: "60%",
    // maxWidth: "900px",
    // display: "flex",
    // justifyContent: "center",
    // overflow: "hidden",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  }}
>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4420607984666!2d73.78349947496491!3d18.599176282509717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f4ba19f5bb%3A0x631e505d3295e0bd!2sSMARTMATRIX%20Digital%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1740552081292!5m2!1sen!2sin"
    width="99%"
    height="300"
    style={{ border: "none", borderRadius: "5px" }}
  ></iframe>
</Box>
</Box>
  );
};

export default ContactUs;
