import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import { createContext } from "react";

export const ColorContext = createContext();

//Router is similar to history in JAVASCRIPT

function App() {
  return (
    <ColorContext.Provider value="pink">
      <div style={{ background: "lightblue" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Add />} />
          </Routes>
        </Router>
      </div>
    </ColorContext.Provider>
  );
}

export default App;
