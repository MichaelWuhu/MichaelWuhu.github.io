import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <About />
      <Projects />
      <Experiences />
      <Footer />
    </Router>
  );
}

export default App;
