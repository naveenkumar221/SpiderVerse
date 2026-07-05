import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Loader from "./Components/Loader/Loader";
import BackToTop from "./Components/BackToTop/BackToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer/Footer";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />

      <Home />

      <About />

      <Contact />

      <Footer />


      <BackToTop />
    </>
  );
}

export default App;