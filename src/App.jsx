import {Routes,Route} from "react-router-dom";
import Navbar from './component/navbar/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import Footer from "./component/footer/Footer";
import ScrollToTop from "./component/scrolltop/ScrollTop";
import ServicesPage from "./pages/ServicesPage";
import HealthCarePage from "./pages/HealthCarePage";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";



function App() {
  return (
    <>
    <Navbar/>
    <ScrollToTop/>
      <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path="/ushealthcare" element={<HealthCarePage/>}/>
        <Route path="/career" element={<CareerPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
       
       
       

      </Routes>
      <Footer/>
    </>
  )
}

export default App;
