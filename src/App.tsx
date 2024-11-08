import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Projects from "./sections/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <About />
      <Projects />
    </Router>
  );
}

export default App;
