import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components/index";
import { createContext, useState } from "react";

export const RouteContext = createContext();
export const RouteProvider = ({ children }) => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <RouteContext.Provider value={{ active, setActive, toggle, setToggle }}>
      {children}
    </RouteContext.Provider>
  );
};
function App() {
  return (
    <RouteProvider>
      <div className="relative z-0 bg-primary">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div
                  className="bg-hero-pattern bg-cover
          bg-no-repeat bg-center"
                >
                  <Hero />
                </div>
              }
            />
            <Route path="about" element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="tech" element={<Tech />} />
            <Route path="projects" element={<Works />} />
            <Route
              path="contact"
              element={
                <div className="relative z-0">
                  <Navbar />
                  <Contact />
                  <StarsCanvas />
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </RouteProvider>
  );
}

export default App;
