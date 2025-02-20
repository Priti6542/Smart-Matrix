import React from "react";
import HomeData from "../../../datafiles/HomeData/HomeData"; // Importing the data file
import styles from "./HomeCard.module.css"; // Importing CSS Module styles

const Card = ({ title, copy, button, backgroundImg }) => {
  return (
    <div 
      className={styles.card} 
      
      
      style={{ backgroundImage: `url(${backgroundImg})` }} // Apply the background image dynamically
    >
        <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        {/* <h2 className={styles.title}>{title}</h2> */}
        <p className={styles.copy}>{copy}</p>
        <button className={styles.btn}>{button}</button>
      </div>
    </div>
  );
};

const HomeCard = () => {
  return (
    <div>
    
      <div className={styles.ServiceTitle}>SERVICES</div>
      <div className={styles.pageContent}>
        {/* Map through the card data from HomeData */}
        {HomeData.cardData && HomeData.cardData.map((card, index) => (
          <Card 
            key={index} 
            backgroundImg={card.backgroundImg} // Pass the background image URL here
            title={card.title} 
            copy={card.copy} 
            button={card.button} 
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
