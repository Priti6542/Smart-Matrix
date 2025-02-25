import React from "react";
import { Container, Paper, TextField, Button } from "@mui/material";
import styles from "./Contact.module.css";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className={styles.Contact}>
    <Container className={styles.container}>
    <div className={styles.Section}>
      <Paper className={styles.paper} >
       
        {/* Left Section - Contact Info */}
        <div className={styles.contactInfo}>
          <h2>Contact Info</h2>
          <div className={styles.contactDetails}>
            <p>📍 Shop No- 5, Akashganga Road, 411027, opp. Sambhaji Maharaj Road, nr. Kokane Chowk, Kavde Nagar, Pimple Saudagar, Pimpri-Chinchwad, Maharashtra 411027</p>
            <p>📧 prititole7709@gmail.com</p>
            <p>📞 +91 9112108484</p>
          </div>
          <div className={styles.socialLinks}>
            <Facebook className={styles.socialIcon} />
            <Instagram className={styles.socialIcon} />
            <Twitter className={styles.socialIcon} />
          </div>
        </div>

        {/* Right Section - Form */}
        <div className={styles.formContainer}>
          <h2>Get in Touch</h2>
          <TextField label="Full Name" fullWidth margin="normal" variant="outlined" />
          <TextField label="Email" fullWidth margin="normal" variant="outlined" />
          <TextField label="Message" multiline rows={4} fullWidth margin="normal" variant="outlined" />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Send Message
          </Button>


        </div>

        {/* Google Map */}
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4420607984666!2d73.78349947496491!3d18.599176282509717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f4ba19f5bb%3A0x631e505d3295e0bd!2sSMARTMATRIX%20Digital%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1740463037762!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        
      </Paper>
      </div>

    </Container>
    </div>
  );
};

export default Contact;
