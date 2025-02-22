import React, { useState } from "react";
import { FaChartLine, FaLaptopCode, FaUsers, FaBullhorn, FaCogs } from "react-icons/fa";
import styles from "./Service.module.css";
import servicesData from "../../../datafiles/ServiceData/ServiceData";

function Services() {
    const [selectedService, setSelectedService] = useState(null);
    
    return (
        <div className={styles.sevice}>
        <div 
        className={styles.ServicesDataContainer} 
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/b9/f0/43/b9f043115c6fe08b4d0a88971c9b71a6.jpg')", backgroundSize: "cover", backgroundPosition: "center",height:1000 }}
    >
            <div className={styles.centerCircle}>Services</div>
            <div className={styles.serviceItems}>
                {servicesData.map((service, index) => (
                    <div 
                        key={service.id} 
                        className={styles.serviceItem} 
                        onClick={() => setSelectedService(service.id === selectedService ? null : service.id)}
                        style={{ transform: `rotate(${index * (360 / servicesData.length)}deg) translate(160px) rotate(-${index * (360 / servicesData.length)}deg)` }}
                    >
                        <div className={styles.icon}>{service.icon}</div>
                        <p>{service.title}</p>
                    </div>
                ))}
            </div>
            {/* {selectedService && (
                <div className={styles.serviceDetails}>
                    {servicesData.find(service => service.id === selectedService).subcategories.map(sub => (
                        <div key={sub.id} className={styles.subCategory}>
                            <div className={styles.subimg}> <img src={sub.src} alt={sub.title} style={{ width: "200px", height: "150px" }} /></div>
                            <h4>{sub.title}</h4>
                            <p>{sub.description}</p>
                        </div>
                    ))}
                </div>
            )} */}
        </div>
        </div>
    );
}

export default Services;
