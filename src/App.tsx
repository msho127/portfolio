import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import "./styles/App.scss";
import "./styles/ggfont.scss";

import About from "./components/About";
import Contact from "./components/Contact";
import Works from "./components/Work";

function App() {
  // チェックボックスの参照をHTMLInputElement型で初期化
  const menuCheckbox = useRef<HTMLInputElement | null>(null);

  // メニューリンクをクリックしたときにチェックを外す関数
  const handleLinkClick = () => {
    if (menuCheckbox.current) {
      menuCheckbox.current.checked = false; // チェックを外す
    }
  };

  return (
    <BrowserRouter>
      <header className="ggfnt ggfntjp">
      <a href="/"><h1>MORITA SHOTARO</h1></a>
      <div className="linkBox">
          <Link to="/works" className="link" onClick={handleLinkClick}>Works</Link>
          <Link to="/contact" className="link" onClick={handleLinkClick}>Contact</Link>
      </div>
      <div className="menuBox">
        <input type="checkbox" className="menuBtn" id="menuBtn" ref={menuCheckbox} />
        <label htmlFor="menuBtn" className="menuIcon"><span className="navicon"></span></label>
        <div className="menu">
          <Link to="/*" className="link" onClick={handleLinkClick}>Top</Link>
          <Link to="/works" className="link" onClick={handleLinkClick}>Works</Link>
          <Link to="/contact" className="link" onClick={handleLinkClick}>Contact</Link>
        </div>
      </div>
      </header>
      <main>
        <div className="box">
          <Routes>
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
