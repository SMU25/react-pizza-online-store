import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import { Header } from "components";
import { Home, Cart } from "pages";

function App() {
  const [pizzaItems, setPizzaItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      axios("http://localhost:3000/dataBase.json").then(({ data }) => {
        setPizzaItems(data.pizzaItems);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="*" element={<h1>Error 404</h1>} />
            <Route
              path="/"
              element={<Home pizzaItems={pizzaItems} isLoading={isLoading} />}
            />
            <Route path="/cart" element={<Cart />} exact />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
