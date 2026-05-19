import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComingSoon from "./Components/ComingSoon";
import { FiArrowUp } from "react-icons/fi";
import Gallery from "./Pages/Gallery";
import Publication from "./Pages/Inscriptions";
import Preservation from "./Pages/Preservation";
import Manuscripts from "./Pages/Manuscripts";
import Inscriptions from "./Pages/Inscriptions";
import INSN00001 from "./Pages/INSN00001";
import INSN00002 from "./Pages/INSN00002";
import NotFound from "./Pages/NotFound";
import INSN00003 from "./Pages/INSN00003";
import InscriptionsDetails from "./Pages/InscriptionsDetails";
import Palaeographical from "./Pages/Palaeographical";
function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const disableRightClick = (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<ComingSoon pageName="About" />} />
            {/* <Route path="/gallery" element={<Gallery/>} /> */}
            <Route path="/blogs" element={<ComingSoon pageName="Blogs" />} />
            <Route path="/events" element={<ComingSoon pageName="Events" />} />
            <Route path="/palaeographical" element={<Palaeographical/>} />
            <Route
              path="/publication"
              element={<ComingSoon pageName="Publication" />}
            />
            <Route
              path="/gallery"
              element={<ComingSoon pageName="Gallery" />}
            />

            <Route
              path="/partners"
              element={<ComingSoon pageName="Partners" />}
            />
            <Route path="/team" element={<ComingSoon pageName="Team" />} />
            <Route path="/care-conservation" element={<Preservation />} />

            {/* <Route path="/publication" element={<Publication/>} /> */}
            <Route path="/inscriptions" element={<Inscriptions />} />
            {/* <Route path="/insn00001/details" element={<INSN00001 />} />
            <Route path="/insn00002/details" element={<INSN00002 />} />
            <Route path="/insn00003/details" element={<INSN00003 />} /> */}

            <Route path="/:slug/details" element={<InscriptionsDetails />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 cursor-pointer bg-[#7b634c] text-white p-3 rounded-full shadow-lg hover:bg-[#9f8c76] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#7b634c] focus:ring-opacity-50 z-50"
            aria-label="Back to top">
            <FiArrowUp size={24} />
          </button>
        )}
      </Router>
    </div>
  );
}

export default App;
