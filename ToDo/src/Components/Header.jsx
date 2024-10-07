
function Header() {
  return (
    <header className="sticky top-0">
        <nav className="nav bg-slate-700 text-white flex justify-around items-center h-[60px]">
            <div className="logo ">
                <h1 className="text-2xl">Avinash</h1>
            </div>
            <div className="link">
                <ul className="flex items-center ">
                    <li className="p-4" >Home</li>
                    <li className="p-4" >About</li>
                    <li className="p-4" >Services</li>
                    <li className="p-4" >Contact</li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header