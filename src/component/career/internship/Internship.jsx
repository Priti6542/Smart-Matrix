import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CareerData from "../../../datafiles/CareerData/CareerData";
import styles from "./Internship.module.css";
import { FaLaptopCode, FaCheckCircle, FaRocket } from "react-icons/fa";

const icons = [FaLaptopCode, FaCheckCircle, FaRocket]; // Rotating icons

const Internship = () => {
  const navigate = useNavigate(); // Initialize navigate function


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
            <div key={item.id || index} className={`${styles.card} ${styles[`card-${index}`]}`}>
              <div className={styles.iconWrapper}>
                <IconComponent />
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>

              <h4><b>🎓 Qualifications:</b></h4>
              <p className={styles.qualification}>{item.qualification}</p>

              <h4><b>🎯 Benefits:</b></h4>
              <p className={styles.benefits}>{item.benefits}</p>

              {/* Contact Us Button - Redirects to Contact Page */}
              <button
                type="button"
                onClick={() => navigate("/contact")}
                className={styles.applyButton}
              >
                Contact Us
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Internship;
