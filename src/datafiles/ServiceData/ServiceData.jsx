import { FaChartLine, FaLaptopCode, FaUsers, FaBullhorn, FaCogs } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    title: "Management",
    icon: <FaChartLine />,
    description: "Expert business solutions for strategic growth.",
    subcategories: [
      { id: "m1", title: "Product Management", description: "Streamline your product lifecycle from development to market success." },
      { id: "m2", title: "IoT Services", description: "Implement smart IoT solutions for automation and efficiency." },
      { id: "m3", title: "Outsourcing", description: "Optimize your business operations with cost-effective outsourcing solutions." }
    ]
  },
  {
    id: 2,
    title: "Digital Marketing",
    icon: <FaBullhorn />,
    description: "Boost your online presence with SEO & Ads.",
    subcategories: [
      { id: "dm1", title: "SEO Optimization", description: "Enhance search rankings with targeted SEO strategies." },
      { id: "dm2", title: "Social Media Marketing", description: "Grow your audience on social platforms." },
      { id: "dm3", title: "Email Campaigns", description: "Drive customer engagement through email marketing." }
    ]
  },
  {
    id: 3,
    title: "Management Courses",
    icon: <FaUsers />,
    description: "Enhance leadership skills with top courses.",
    subcategories: [
      { id: "mc1", title: "Business Analytics", description: "Learn data-driven decision-making techniques." },
      { id: "mc2", title: "Project Management", description: "Master project planning and execution." },
      { id: "mc3", title: "Leadership Training", description: "Develop essential leadership qualities." }
    ]
  },
  {
    id: 4,
    title: "Development",
    icon: <FaLaptopCode />,
    description: "Custom software solutions for businesses.",
    subcategories: [
      { id: "d1", title: "Web Development", description: "Build scalable web applications." },
      { id: "d2", title: "App Development", description: "Create high-performance mobile apps." },
      { id: "d3", title: "Cloud Solutions", description: "Leverage cloud computing for business growth." }
    ]
  },
  {
    id: 5,
    title: "IT Courses",
    icon: <FaCogs />,
    description: "Learn the latest tech skills and tools.",
    subcategories: [
      { id: "it1", title: "Cybersecurity", description: "Protect systems from digital threats." },
      { id: "it2", title: "AI & Machine Learning", description: "Explore artificial intelligence and ML applications." },
      { id: "it3", title: "Data Science", description: "Master data analysis and predictive modeling." }
    ]
  }
];

export default servicesData;
