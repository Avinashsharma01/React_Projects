import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="sticky top-0">
        <nav style={{
            backgroundColor:"#023047"
        }} className="nav bg-slate-700 text-white flex justify-around items-center h-[60px] max-sm:text-sm ">
            <div className="logo ">
                <h1 className="text-3xl">Avinash</h1>
            </div>
            <div className="link">
                <ul className="flex items-center ">
                    <NavLink to="/"><li className="p-4" >Home</li></NavLink>
                    <NavLink to="about" ><li className="p-4" >About</li></NavLink>
                    <NavLink to="Services" ><li className="p-4" >Services</li></NavLink>
                    <NavLink to="Contact" ><li className="p-4" >Contact</li></NavLink>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header