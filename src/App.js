import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "components";
import { Home, Cart } from "pages";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="*" element={<h1>Error 404</h1>} />
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Cart />} exact />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
