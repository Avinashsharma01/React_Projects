import Login from "./Components/Auth/Login";
import Ragister from "./Components/Auth/Ragister";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
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


function App() {
    return (
        <>
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/Login" element={<Login/>}></Route>
                    <Route path="/Register" element={<Ragister/>}></Route>
                    <Route path="/About" element={<About/>}></Route>
                    <Route path="/Contact" element={<Contact/>}></Route>
                    <Route path="/Services" element={<Services/>}></Route>
                    <Route path="*" element={<Navigate to="/" />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
export default App;
