import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/listings" element={<App />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);


