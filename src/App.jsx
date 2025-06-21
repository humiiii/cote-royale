import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fragrance from "./pages/Fragrance";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/cote-royale" element={<Home />} />
        <Route path="/cote-royale/fragrance/:name" element={<Fragrance />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
