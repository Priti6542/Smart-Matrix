import React from "react";
import HealthCareData from "../../../datafiles/healthcare/HealthCareData";
import styles from "./ARMedicalBilling.module.css";

const FeatureSection = () => {
  return (
    <div className={styles.section}>
      <h1 className={styles.heading}>Our Healthcare Features</h1>
      <div className={styles.featureContainer}>
        {HealthCareData.FeatureSectionData.map((feature, index) => (
          <div
            key={index}
            className={`${styles.featureItem} ${index % 2 === 0 ? styles.reverse : ""}`}
          >
            {/* Left Side - Image */}
            <div className={styles.imageContainer}>
            <img src={feature.images} alt={feature.title} className={styles.iconImage} />

              {/* <img src={feature.backgroundImage} alt={feature.title} className={styles.featureImage} /> */}
            </div>

            {/* Right Side - Information */}
            <div className={styles.textContainer}>
              <h2 className={styles.title}>{feature.title}</h2>
              <p className={styles.description}>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
