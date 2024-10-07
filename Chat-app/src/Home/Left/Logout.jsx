import { BiLogOutCircle } from "react-icons/bi";
function Logout() {
    return (
        <div className="text-2xl flex gap-2 items-center  ml-[50px]">
            <div className="icon">
                <BiLogOutCircle />
            </div>
            <div className="logout">
                <h1>Logout</h1>
            </div>
        </div>
    );
}

export default Logout;
