import React from "react";
import CareerData from "../../../datafiles/CareerData/CareerData";
import styles from "./WorkWith.module.css";
import { FaUsers, FaGlobe, FaNetworkWired } from "react-icons/fa"; 

const icons = [FaUsers, FaGlobe, FaNetworkWired]; // Define rotating icons

const WorkWith = () => {
  return (
    <div className={styles.opportunitiesSection}>
      <h2 className={styles.heading}>Career Growth WorkWith</h2>
      <div className={styles.cardsContainer}>
        {CareerData.WorkWith.map((item, index) => {
          const IconComponent = icons[index % icons.length]; // Rotate icons
          return (
            <div key={index} className={`${styles.card} ${styles[`card-${index}`]}`}>
              <div className={styles.iconWrapper}>
                <IconComponent className={styles.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className={styles.shine}></div> {/* Shine Effect */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkWith;
