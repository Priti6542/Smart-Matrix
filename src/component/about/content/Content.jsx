import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import AboutData from "../../../datafiles/AboutData/AboutData";
import { Icon } from "@mui/material";

const Content = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, // 1 column for mobile, 2 for larger screens
        gap: 3,
        p: { xs: 2, sm: 4 }, // Adjust padding for smaller screens
        mx: { xs: "1rem", sm: "4rem", md: "9rem" }, // Adjust margin for different screen sizes
        mt: 5,
      }}
    >
      {AboutData.ContentData.map((item, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            textAlign: "center",
            p: { xs: 2, sm: 3 }, // Responsive padding
            border: "1px solid #ddd",
            borderRadius: 5,
            boxShadow: 5,
            overflow: "hidden",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)", // Slight zoom effect on hover
            },
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              width: "200%",
              height: "100%",
              background:
                "linear-gradient(120deg, transparent, rgba(240, 214, 202, 0.6), transparent)",
              transform: "skewX(-25deg)",
              animation: "shine 2s infinite linear",
            },
          }}
        >
          <Icon component={item.icon} sx={{ fontSize: isMobile ? 30 : 40, color: "primary.main" }} />
          <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, color: "gray" }}>
            {item.description}
          </Typography>
        </Box>
      ))}

      {/* Adding keyframes inside MUI theme */}
      <style>
        {`
          @keyframes shine {
            0% {
              left: -150%;
            }
            100% {
              left: 150%;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default Content;
