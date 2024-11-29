// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MyContextState } from "./ContextApi/MyContextState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <MyContextState>
        <App />
    </MyContextState>
    // </React.StrictMode>,
);
