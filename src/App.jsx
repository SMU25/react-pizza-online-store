import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "redux/store";
import AppRoutes from "routes/Router";
import { Header, ModalWindow } from "components";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <ModalWindow />
          <div className="wrapper">
            <Header />
            <div className="content">
              <AppRoutes />
            </div>
          </div>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
