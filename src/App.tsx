import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./sections/About";

function App() {
  return (
    <Router>
      <Navbar />
      <section>
        <About />
      </section>
    </Router>
  );
}

export default App;
