import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Gulde from "./pages/Gulde";
import MarktPlace from "./pages/MarktPlace";
import SingleAnnemal from "./components/marketplace/SingleAnnemal/SingleAnnemal";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gulde" element={<Gulde />} />
        <Route path="/marktplace" element={<MarktPlace />} />
        <Route path={`/marktplace/:name`} element={<SingleAnnemal />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
