import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import AboutData from "../../../datafiles/AboutData/AboutData";

const AboutCard = () => {
  const {  AboutCard } = AboutData;

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      

      {/* About Card Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        {AboutCard.map((item, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 800,
              borderRadius: "12px",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
              overflow: "hidden",
            }}
          >
            {/* Video Section */}
            <video
              src={item.video}
              autoPlay
              loop
              muted
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />

            {/* Card Content */}
            <CardContent>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {item.Heading}
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </Container>
  );
};

export default AboutCard;
