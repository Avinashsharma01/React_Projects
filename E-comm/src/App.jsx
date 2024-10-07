import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./Components/Pages/Home/HomePage";
import NoPage from "./Components/Pages/NoPage/NoPage";
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/*" element={<NoPage/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

