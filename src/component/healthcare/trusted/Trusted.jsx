import React, { useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HealthCareData from "../../../datafiles/healthcare/HealthCareData";

const Trusted = () => {
  const scrollContainerRef = useRef(null);

  // Function to scroll left or right
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // Adjust scroll speed
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ textAlign: "center", my: 5, px: 3, marginTop:"90px", }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
        Our Trusted Partners
      </Typography>

      {/* Scroll Buttons */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
        <IconButton onClick={() => scroll("left")} sx={{ background: "#ddd", borderRadius: "50%" }}>
          <ArrowBackIosIcon />
        </IconButton>

        {/* Scrollable Container */}
        <Box
          ref={scrollContainerRef}
          sx={{
            display: "flex",
            overflowX: "auto",
           
            gap: 3,
            p: 2,
            whiteSpace: "nowrap",
            scrollbarWidth: "none", // Hide scrollbar (Firefox)
            "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar (Chrome, Safari)
            scrollBehavior: "smooth", // Enable smooth scrolling
            maxWidth: "80%", // Adjust container width
          }}
        >
          {HealthCareData.TrustedData.map((item, index) => (
            <Box key={index} sx={{ minWidth: "150px", flexShrink: 0 }}>
              <img
                src={item.image}
                alt={`Trusted Partner ${index + 1}`}
                style={{
                  width: "400px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "8px",
                 
                  boxShadow:"2px 2px 2px 2px grey",
                }}
              />
            </Box>
          ))}
        </Box>

        <IconButton onClick={() => scroll("right")} sx={{ background: "#ddd", borderRadius: "50%" }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Trusted;
