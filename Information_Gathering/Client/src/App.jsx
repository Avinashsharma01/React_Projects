import Login from "./Components/Auth/Login";
import Ragister from "./Components/Auth/Ragister";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    NavLink,
    Navigate,
} from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import Message from "./Pages/Subpage/Message";
import WithoutLogingUser from "./Pages/WithoutLogingUser";
import { ToastContainer } from "react-toastify";

function App() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const allowedEmails = [
        "avinashsharma31384@gmail.com",
        "kumarisoumya204@gmail.com",
        "avinashkrsharma123456789@gmail.com",
    ];
    return (
        <>
            <ToastContainer />
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route
                        path="/"
                        element={
                            isAuthenticated &&
                            allowedEmails.includes(user?.email) ? (
                                <Home allowedUser={allowedEmails} />
                            ) : (
                                <LandingPage />
                            )
                        }
                    />

                    {/* Home route accessible only if authenticated */}
                    {/* <Route
                        path="/home"
                        element={
                            isAuthenticated ? <Home /> :  <LandingPage/>
                        } 
                        // <Navigate to="/" />
                    /> */}

                    {/* <Route path="/Login" element={<Login/>}></Route>
                    <Route path="/Register" element={<Ragister/>}></Route> */}
                    <Route path="/About" element={<About />}></Route>
                    <Route path="/Contact" element={<Contact />}></Route>
                    <Route path="/Services" element={<Services />}></Route>
                    <Route path="/Message" element={<Message />}></Route>
                    <Route path="*" element={<Navigate to="/" />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
export default App;
