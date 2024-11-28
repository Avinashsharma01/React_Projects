import { NavLink } from "react-router-dom";

const LandingPage = () => {
    return (
        <div className="w-full h-screen bg-slate-700 flex justify-center items-center flex-col space-y-5">
            <h1 className="text-3xl text-center mt-10">
                Welcome to the Landing Page
            </h1>
            <div className="">
                <NavLink to="/login" className="mr-5">
                    login
                </NavLink>
                <NavLink to="/signup">signup</NavLink>
            </div>
        </div>
    );
};

export default LandingPage;
