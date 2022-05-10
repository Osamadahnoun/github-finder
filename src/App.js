import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title="Github finder" />

        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route element={<About />} exact path="/about" />
            <Route element={<Home />} exact path="/" />
            <Route element={<NotFound />} exact path="/notfound" />
            <Route element={<NotFound />} exact path="/*" />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
