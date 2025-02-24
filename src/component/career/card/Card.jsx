import React from "react";
import CareerData from "../../../datafiles/CareerData/CareerData";
import styles from "./Card.module.css"; // Import CSS file
import { FaUsers, FaGlobe, FaNetworkWired } from "react-icons/fa"; // Import icons

const icons = [FaUsers, FaGlobe, FaNetworkWired]; // Define icons

const Card = () => {
  return (
    <div className={styles.opportunitiesSection}>
      <h2 className={styles.heading}>Career Growth Opportunities</h2>
      <div className={styles.cardsContainer}>
        {CareerData.Opportunities.map((item, index) => {
          const IconComponent = icons[index % icons.length]; // Rotate icons
          return (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <IconComponent className={styles.icon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
