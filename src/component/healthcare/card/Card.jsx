import React from "react";
import styles from "./Card.module.css";
import HealthCareData from "../../../datafiles/healthcare/HealthCareData";
import DoneAllIcon from '@mui/icons-material/DoneAll';

const Card = () => {
  return (
    <div className={styles.container}>
      {HealthCareData.HealthCard.map((item, index) => (
        <div key={index} className={styles.cardWrapper}>
          {/* Circle */}
          <div className={styles.circle}>
            <h3 className={styles.title}>{item.Heading}</h3>
          </div>

          {/* Icon & Description outside the circle */}
          <div className={styles.details}>
            {/* ✅ Properly Render Material UI Icon */}
            {item.icon && <item.icon className={styles.icon} sx={{ fontSize: 50, color: "#007BFF" }} />}

            {/* Convert description string into a list */}
            <ul className={styles.descriptionList}>
              <h3 className={styles.heading}>{item.Heading}</h3>
              {/* <div className={styles.ListIcon}> */}
                {item.description.split(",").map((point, i) => (
                  <li key={i} className={styles.descriptionItem}>
                    <DoneAllIcon className={styles.doneicon} sx={{ fontSize: 20, color: "#007BFF" }} />
                    {point.trim()} {/* Removes extra spaces */}
                  </li>

                ))}
              {/* </div> */}
            </ul>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
