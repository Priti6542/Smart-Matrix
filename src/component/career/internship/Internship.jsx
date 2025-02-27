import React from "react";
import CareerData from "../../../datafiles/CareerData/CareerData";
import styles from "./Internship.module.css";
import { FaLaptopCode, FaCheckCircle, FaRocket } from "react-icons/fa";

const icons = [FaLaptopCode, FaCheckCircle, FaRocket]; // Rotating icons

const googleFormURL = "https://www.google.com";

const Internship = () => {
  return (
    <div className={styles.internshipSection}>
      <h2 className={styles.heading}>🚀 Internship Opportunities</h2>
      <p className={styles.subHeading}>
        Gain real-world experience and accelerate your career with us!
      </p>
      <div className={styles.cardsContainer}>
        {CareerData.Internship.map((item, index) => {
          const IconComponent = icons[index % icons.length]; // Rotate icons
          return (
            <div key={index} className={`${styles.card} ${styles[`card-${index}`]}`}>
              <div className={styles.iconWrapper}>
                <IconComponent />
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
              <h4>🎓 Qualifications:</h4>
              <p className={styles.qualification}>{item.qualification}</p>
              <h4>🎯 Benefits:</h4>
              <p className={styles.benefits}>{item.benefits}</p>
              {/* Apply Button - Opens Google Form */}
              <a 
  href={googleFormURL} 
  target="_blank" 
  rel="noopener noreferrer" 
  className={styles.applyButton}
>
  Apply Now
</a>



              {/* <div className={styles.glow}></div> Neon Glow Effect */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Internship;
