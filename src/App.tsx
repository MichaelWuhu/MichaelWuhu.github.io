import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./sections/Home";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";
import ProjectsNew from "./sections/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <About />
      {/* <Projects /> */}
      <ProjectsNew />
      <Footer />
    </Router>
  );
}

export default App;
