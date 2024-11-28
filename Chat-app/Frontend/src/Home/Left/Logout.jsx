import axios from "axios";
import { BiLogOutCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
function Logout() {
    const handleLogout = () => {
        axios.get("http://localhost:5000/api/logout");
        // window.location.href = "/";
    };
    return (
        <div
            className="text-2xl flex gap-2 items-center  ml-[50px]"
            onClick={handleLogout}
        >
            <div className="icon">
                <BiLogOutCircle />
            </div>
            <div className="logout">
                <NavLink to="/" className="p-2 border border-white">
                    Logout
                </NavLink>
            </div>
        </div>
    );
}

export default Logout;
