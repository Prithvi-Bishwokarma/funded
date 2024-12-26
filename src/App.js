// import { Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Funded from "./pages/Home/Funded";
import { useEffect } from "react";
import WOW from "wow.js";
import HomeTwo from "./pages/Home/HomeTwo";
import About from "./pages/About/About";
import AddOns from "./pages/AddOns/AddOns";
import Rules from "./pages/Rules/Rules";
import Disclaimer from "./pages/Disclaimer/Disclaimer";
import RiskDisclosure from "./pages/RiskDisclosure/RiskDisclosure";
import TermsConditions from "./pages/TermsConditions/TermsConditions";
import Blog from "./pages/Blog/Blog";
import BlogDetailsPage from "./pages/BlogDetails/BlogDetailsPage";
import { useLocation } from "react-router-dom";

function App() {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: false,
    });
    wow.init();
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/funded" element={<Funded />} />
        <Route path="home-two" element={<HomeTwo />} />
        <Route path="about" element={<About />} />
        <Route path="rules" element={<Rules />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="riskdisclosure" element={<RiskDisclosure />} />
        <Route path="termsconditions" element={<TermsConditions />} />
        <Route path="addOns" element={<AddOns />} />
      </Routes>
    </>
  );
}

export default App;
