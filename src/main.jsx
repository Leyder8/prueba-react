import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { CreateTaskContext } from "./context/context";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CreateTaskContext>
      <App />
    </CreateTaskContext>
  </React.StrictMode>
);
