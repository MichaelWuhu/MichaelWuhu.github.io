import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./sections/Home";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";

function App() {
  return (

    <Router>
      <Navbar />
      <About />
      <Projects />
      <Footer />
    </Router>
  );
}

export default App;
