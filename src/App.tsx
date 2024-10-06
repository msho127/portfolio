import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import "./styles/ggfont.scss";

import About from "./components/About";
import Contact from "./components/Contact";
import Works from "./components/Work";
import Top from "./components/top";

function App() {
  return (
    <BrowserRouter>
    {/* <div className="loding">
      <svg width="100" height="100vh" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke="#888" strokeWidth="1.5">
          <path d="M0,100 L120,0" />
          <path d="M0,140 L70,0" />
          <path d="M0,300 L700,0" />
          <path d="M0,320 L1460,100" />
          <path d="M0,500 L360,760" />
          <path d="M0,580 L320,760" />
          <path d="M0,670 L800,580" />
          <path d="M50,770 L800,580" />
          <path d="M700,770 L800,580" />
          <path d="M1080,760 L1260,0" />
          <path d="M1080,760 L1460,400" />
          <path d="M650,0 L1200,900" />
          <path d="M1300,760 L1460,330" />
          <path d="M1280,650 L1400,770" />
          <path d="M1280,650 L1460,700" />
          <path d="M1280,650 L1460,710" />
        </g>
      </svg>
      <div className="box">
        <div className="animation">
          <p>PORTFOLIO</p>
        </div>
      </div>
    </div> */}
    <header className="ggfnt ggfntjp">
      <h1>MORITA SHOTARO</h1>
      <div className="linkBox">
        <Link to="/about" className="link">About</Link>
        <Link to="/works" className="link">Works</Link>
        <Link to="/contact" className="link">Contact</Link>
      </div>
    </header>
    <main>
      <div className="box">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/works/" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<About />} />
          </Routes>
      </div>
    </main>
    </BrowserRouter>
  );
}
export default App;