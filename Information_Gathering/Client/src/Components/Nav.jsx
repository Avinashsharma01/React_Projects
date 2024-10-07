import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <header className="bg-slate-600 text-white sticky top-0">
            <nav className="flex justify-around items-center h-[60px]">
                <div className="logo">
                    <h1>Avinash</h1>
                </div>
                <div className="link">
                    <ul className="flex items-center">
                        <li className="p-2" ><NavLink to="/">Home</NavLink></li>
                        <li className="p-2" ><NavLink to="/About">About</NavLink></li>
                        <li className="p-2" ><NavLink to="/Services">Services</NavLink></li>
                        <li className="p-2" ><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="login">
                    <ul className="flex items-center">
                        <li className="p-2" ><NavLink to="Login">Login</NavLink></li>
                        <li className="p-2" ><NavLink to="Register">Register</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
  )
}

export default Nav