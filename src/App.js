import "./App.css";
import Experience from "./Pages/Experience/Experience";
import Intro from "./Pages/Intro/Intro";
import Navbar from "./Pages/Navbar/Navbar";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Services from "./Pages/Services/Services";
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
    </div>
  );
}

export default App;
