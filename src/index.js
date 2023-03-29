// React
import React from "react";
import ReactDOM from "react-dom/client";

// React router
import { BrowserRouter } from "react-router-dom";

// CSS
import "./index.css";

// App
import App from "./App";

// Web vitals
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
