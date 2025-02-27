import React, { useRef } from "react";
import { Box, Typography, IconButton, useMediaQuery, useTheme } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HealthCareData from "../../../datafiles/healthcare/HealthCareData";

const Trusted = () => {
  const scrollContainerRef = useRef(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Mobile
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md")); // Tablet

  // Function to scroll left or right
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = isSmallScreen ? 150 : isMediumScreen ? 200 : 300; // Adjust scroll distance
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ textAlign: "center", my: 5, px: 3, marginTop: "90px" }}>
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
            gap: isSmallScreen ? 1 : 3,
            p: 2,
            whiteSpace: "nowrap",
            scrollbarWidth: "none", // Hide scrollbar (Firefox)
            "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar (Chrome, Safari)
            scrollBehavior: "smooth",
            maxWidth: isSmallScreen ? "90%" : isMediumScreen ? "85%" : "80%", // Adjust width based on screen
            cursor: "grab", // Allow drag-scroll
          }}
          onMouseDown={(e) => {
            const startX = e.pageX;
            const startScrollLeft = scrollContainerRef.current.scrollLeft;
            const onMouseMove = (event) => {
              scrollContainerRef.current.scrollLeft = startScrollLeft - (event.pageX - startX);
            };
            const onMouseUp = () => {
              window.removeEventListener("mousemove", onMouseMove);
              window.removeEventListener("mouseup", onMouseUp);
            };
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
          }}
        >
          {HealthCareData.TrustedData.map((item, index) => (
            <Box key={index} sx={{ minWidth: isSmallScreen ? "120px" : "150px", flexShrink: 0 }}>
              <img
                src={item.image}
                alt={`Trusted Partner ${index + 1}`}
                style={{
                  width: isSmallScreen ? "250px" : isMediumScreen ? "300px" : "400px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "8px",
                  boxShadow: "2px 2px 5px grey",
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
