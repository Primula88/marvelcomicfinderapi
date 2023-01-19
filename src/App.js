// Import components
import Navbar from "./components/Navbar";
import NavItem from "./components/Navbar/NavItem";
import Logo from "./components/Navbar/Logo";
import HeroDetails from "./components/HeroDetails";
import Home from "./components/Home";
import ComicDetails from "./components/ComicDetails.jsx";
 
// Import dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar logo={<Logo text={"Prim's Marvel Page"} />}>
        <NavItem to={"/"} text={"Home"} />
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ComicDetails />} />
      </Routes>
    </Router>
  );
}

export default App;