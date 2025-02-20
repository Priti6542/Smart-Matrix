import {Routes,Route} from "react-router-dom";
import Navbar from './component/navbar/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import Footer from "./component/footer/Footer";


function App() {
  return (
    <>
    <Navbar/>
      <Routes>

        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
       
       

      </Routes>
      <Footer/>
    </>
  )
}

export default App;
