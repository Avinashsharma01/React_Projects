import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./Components/User";
import Update from "./Components/Update";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/Register" element={<User />}></Route>
                    <Route path="/update/:id" element={<Update/>}></Route>
                    {/* <Route path="/delete/:id" element={<Update/>}></Route> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
