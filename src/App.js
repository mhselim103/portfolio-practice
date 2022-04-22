import "./App.css";
import Experience from "./Pages/Experience/Experience";
import Intro from "./Pages/Intro/Intro";
import Navbar from "./Pages/Navbar/Navbar";
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
    </div>
  );
}

export default App;
