import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/NavBar/Nav";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Certification from "./Components/Certifications/Certification";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import DetailPortfolio from "./Components/Portfolio/DetailPortfolio";
import { useState } from "react";

function App() {
  const [portfolio, setPortfolio] = useState(false);

  const clickHandeler = () => {
    setPortfolio((previous) => {
      return !previous;
    });
    window.scrollTo(0, 0);
  };

  let entireWebsite = (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio onClick={clickHandeler} />
      <Certification />
      <Contact />
      <Footer />
    </>
  );

  let pContent = <DetailPortfolio onClick={clickHandeler} />;

  return portfolio ? pContent : entireWebsite;
}

export default App;
