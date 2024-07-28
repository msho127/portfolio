import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import "./styles/ggfont.scss";

import About from "./components/About";
import Contact from "./components/Contact";
import Works from "./components/Work";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
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
            <Route path="/*" element={<NotFound />} />
          </Routes>
      </div>
    </main>
    </BrowserRouter>
  );
}
export default App;