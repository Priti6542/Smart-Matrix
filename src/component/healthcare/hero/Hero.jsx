import React from "react";
import HealthCareData from "../../../datafiles/healthcare/HealthCareData";
import styles from './Hero.module.css'

const Hero= () => {
    const heroData = HealthCareData.HealthHero[0]; // Accessing first object

    return (
        <div className={styles.heroContainer}>
            <video autoPlay loop muted className={styles.backgroundVideo}>
                <source src={heroData.backgroundvideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={styles.videoOverlay}></div> {/* Blur overlay */}
            <div className={styles.heroContent}>
                <h1>{heroData.Heading}</h1>
                <p>{heroData.subheading}</p>
            </div>
        </div>
       
    );
};

export default Hero;
