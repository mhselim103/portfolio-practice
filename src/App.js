import "./App.css";
import Contact from "./Pages/Contact/Contact";
import Experience from "./Pages/Experience/Experience";
import Intro from "./Pages/Intro/Intro";
import Navbar from "./Pages/Navbar/Navbar";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Services from "./Pages/Services/Services";
import Testimonial from "./Pages/Testimonial/Testimonial";
import Works from "./Pages/Works/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
