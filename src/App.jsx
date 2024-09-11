import TestimonialSection from "./components/TestimonialSection"
import CoursesSection from "./components/CoursesSection"
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/CustomNavbar";
import HomeCarousel from "./components/HomeCarousel";
import Footer from "./components/Footer";
import Feature from "./components/Feature";
import About from "./components/About";
import Team from "./components/Team";
import Contact from "./components/Contact";





function App() {
 
  return (
    <>
    <div id="top" data-spy="scroll" data-target=".navbar-collapse" data-offset="50">
     <CustomNavbar/>
    <section className="preloader">
         <div className="spinner">

              <span className="spinner-rotate"></span>
              
         </div>
    </section>

     <HomeCarousel/>
     <Feature/>
     <About/>
     <Team/>
    <CoursesSection />
    <TestimonialSection />
    <Contact/>
    <Footer/>

</div>
    </>
  )
}

export default App
