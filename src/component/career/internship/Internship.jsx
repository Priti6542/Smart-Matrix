import React from "react";
import CareerData from "../../../datafiles/CareerData/CareerData";
import styles from "./Internship.module.css";
import { FaLaptopCode, FaCheckCircle, FaAward } from "react-icons/fa";

const icons = [FaLaptopCode, FaCheckCircle, FaAward]; // Icons for rotation

const Internship = () => {
  return (
    <div className={styles.internshipSection}>
      <h2 className={styles.heading}>Exciting Internship Opportunities</h2>
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
              <h4>Qualifications:</h4>
              <p className={styles.qualification}>{item.qualification}</p>
              <h4>Benefits:</h4>
              <p className={styles.benefits}>{item.benefits}</p>
              <div className={styles.shine}></div> {/* Shine effect */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Internship;
