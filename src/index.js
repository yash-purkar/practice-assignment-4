import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataContextProvider } from "./Contexts/DataContext";
import { AuthContextProvider } from "./Contexts/AuthContext";
import { AddressContextProvider } from "./Contexts/AddressContext";
import { OrderContextProvider } from "./Contexts/OrderContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataContextProvider>
        <AuthContextProvider>
          <AddressContextProvider>
            <OrderContextProvider>
              <App />
            </OrderContextProvider>
          </AddressContextProvider>
        </AuthContextProvider>
      </DataContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
