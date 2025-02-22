import React, { useState } from "react";
import styles from "./ServiceCard.module.css";
import { FaChartLine, FaBullhorn, FaUsers, FaLaptopCode, FaCogs } from "react-icons/fa";
import SevicesCardData from "../../../datafiles/ServiceData/ServicesCardData";

const categoryIcons = {
    management: <FaChartLine className={styles.icon} />,
    digitalMarketing: <FaBullhorn className={styles.icon} />,
    managementCourses: <FaUsers className={styles.icon} />,
    development: <FaLaptopCode className={styles.icon} />,
    itCourses: <FaCogs className={styles.icon} />,
};

const ServicesCard = () => {
    const [selectedCategory, setSelectedCategory] = useState("management");

    return (
        <div className={styles.container}>
            {/* Button Group with Solid Line */}
            <div className={styles.buttonWrapper}>
                {Object.keys(SevicesCardData).map((category, index, arr) => (
                    <React.Fragment key={category}>
                        <button
                            className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ""}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {categoryIcons[category]} {category.replace(/([A-Z])/g, " $1")}
                        </button>
                        {index < arr.length - 1 && <div className={styles.line}></div>} {/* Solid line between buttons */}
                    </React.Fragment>
                ))}
            </div>

            {/* Display Selected Category Data */}
            <div className={styles.Cardtitle}>
                {categoryIcons[selectedCategory]} {selectedCategory.replace(/([A-Z])/g, " $1")}
            </div>
            <div className={styles.card}>

                {/* <div className={styles.CardDetails}> */}
                {SevicesCardData[selectedCategory].map((item) => (
                    <div key={item.id} className={styles.item}>
                        {item.src && <img src={item.src} alt={item.title} className={styles.image} />}
                        <h3 className={styles.subtitle}>{item.title}</h3>
                        <p className={styles.description}>{item.description}</p>
                    </div>
                ))}
            </div>
            {/* </div> */}
        </div>
    );
};

export default ServicesCard;
