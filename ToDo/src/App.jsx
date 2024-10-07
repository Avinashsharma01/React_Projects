import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Todo from "./Components/Todo"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"

import {BrowserRouter ,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
   

       <BrowserRouter>
       <Header />
            <Routes>
              <Route path="/" element={<Todo />} />
              <Route path="/about" element={<About/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
            <Footer />
       </BrowserRouter>
    </div>
  )
}

export default App