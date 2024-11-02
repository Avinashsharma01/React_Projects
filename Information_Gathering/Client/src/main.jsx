import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(

        <Auth0Provider
            domain="avinashsharma0101.us.auth0.com"
            clientId="SM5S9mmowTTj0I0KDf7OvX2Kg30i7ylT"
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <App />
        </Auth0Provider>

);

// avinashsharma0101.us.auth0.com
// SM5S9mmowTTj0I0KDf7OvX2Kg30i7ylT
