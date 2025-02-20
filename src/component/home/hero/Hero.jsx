import React from 'react';
import { Box, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
import HomeData from '../../../datafiles/HomeData/HomeData';
import styles from './Hero.module.css';

function Hero() {
  const heroContent = HomeData.HeroData[0];
  const clouds = heroContent.CloudImages;

  // Get Material UI Theme for responsive behavior
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        position: 'relative',
        height: isSmallScreen ? '70vh' : '85vh', // Adjust height for small screens
        width: '100%',
        backgroundImage: `url(${heroContent.BackgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      {/* Cloud images */}
      <div className={styles.clouds}>
        {clouds.map((cloud, index) => (
          <img key={index} src={cloud.src} alt={`Cloud ${index + 1}`} style={{ '--i': cloud.index }} />
        ))}
      </div>

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant={isSmallScreen ? 'h3' : 'h2'}
          sx={{ fontWeight: 'bold', color: 'rgb(31, 31, 31)' }}
        >
          {heroContent.HeroTitle}
        </Typography>
        <Typography
          variant={isSmallScreen ? 'h5' : 'h4'}
          sx={{ mt: 2, mb: 3, color: 'blue' }}
        >
          {heroContent.HeroSubTitle}
        </Typography>
      </Container>
    </Box>
  );
}

export default Hero;
