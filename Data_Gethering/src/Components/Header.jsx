
function Header() {
  return (
    <>
        <header className=" text-white">
            <nav className="bg-slate-600 flex justify-around items-center h-[60px]" >
                <div className="logo">
                    <h className="text-3xl text" >Avinash</h>
                </div>
                <div className="link">
                    <ul className="flex" >
                        <li className="px-3"><a className="hover:border-b-2" href="#">Home</a></li>
                        <li className="px-3"><a className="hover:border-b-2" href="#">About</a></li>
                        <li className="px-3"><a className="hover:border-b-2" href="#">Services</a></li>
                        <li className="px-3"><a className="hover:border-b-2" href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header> 
    </>
  )
}

export default Header