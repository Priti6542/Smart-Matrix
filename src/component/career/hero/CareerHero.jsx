import React from "react";
import styles from "./CareerHero.module.css"; // Import your CSS module
import CareerData from "../../../datafiles/CareerData/CareerData";

const CareerHero = () => {
  return (
    <div
      className={styles.careerHero}
      style={{ backgroundImage: `url(${CareerData.CareerHero[0].backgroundImage})` }}
    >
      <div className={styles.overlay}></div> {/* Overlay for better visibility */}
      <div className={styles.careerHeroContent}>
        <h1>{CareerData.CareerHero[0].title}</h1>
        <p>{CareerData.CareerHero[0].description}</p>
        <button className={styles.heroButton}>Learn More</button>
      </div>
    </div>
  );
};

export default CareerHero;
